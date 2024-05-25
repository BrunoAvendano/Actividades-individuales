# Definimos el módulo PyLexer
defmodule PyLexer do

  # Esta función toma dos nombres de archivo como entrada y salida, y tokeniza el archivo de entrada.
  @spec tokenize(String.t(), String.t()) :: :ok
  def tokenize(in_filename, out_filename) do
    # Abrimos el archivo de salida para escritura
    {:ok, out_fd} = File.open(out_filename, [:write])
    # Leemos el archivo de entrada, encontramos los tokens, filtramos los vacíos, aplanamos la lista y generamos el HTML.
    in_filename
    |> File.stream!()
    |> Enum.map(&find_token(&1))
    |> Enum.filter(&(&1 != []))
    |> List.flatten()
    |> doHtml(out_fd)
    # Cerramos el archivo de salida
    File.close(out_fd)
  end

  # Esta función encuentra los tokens en una línea de texto.
  @spec find_token(String.t()) :: list()
  def find_token(line), do: find_token(line, [])

  # Si la línea está vacía, devolvemos los resultados.
  defp find_token("", res), do: Enum.reverse(res)
  # Si la línea no está vacía, buscamos el siguiente token.
  defp find_token(line, res) do
    # Definimos los patrones de los tokens que estamos buscando.
    patterns = [
      {:function_keyword, ~r/^def\b/},
      {:function_name, ~r/^[a-zA-Z_][a-zA-Z0-9_]*\(/},
      {:keyword, ~r/^class\b|^if\b|^else\b|^elif\b|^for\b|^while\b|^break\b|^continue\b|^return\b|^import\b|^from\b|^as\b|^global\b|^nonlocal\b|^lambda\b|^yield\b|^try\b|^except\b|^finally\b|^raise\b|^with\b|^assert\b|^del\b|^pass\b|^and\b|^or\b|^not\b|^is\b|^in\b/},
      {:identifier, ~r/^[a-zA-Z_][a-zA-Z0-9_]*/},
      {:integer, ~r/^\d+/},
      {:float, ~r/^\d+\.\d+/},
      {:operator, ~r/^\+|^-|^\/|^\*|^\*\*|^\%|^\//},
      {:assignment, ~r/^=/},
      {:parenthesis, ~r/^\(|^\)/},
      {:brackets, ~r/^\[|^\]/},
      {:braces, ~r/^\{|^\}/},
      {:colon, ~r/^:/},
      {:comma, ~r/^,/},
      {:dot, ~r/^\./},
      {:newline, ~r/^\n+/},
      {:space, ~r/^\s+/},
      {:string, ~r/^".*"|^'.*'/},
      {:comment, ~r/^#.*$/}
    ]

    # Buscamos el primer patrón que coincida en la línea.
    {token_type, token, remaining_line} =
      patterns
      |> Enum.find_value({nil, nil, line}, fn {type, pattern} ->
        case Regex.run(pattern, line, capture: :first) do
          [match] ->
            # Si encontramos una coincidencia, cortamos la línea y seguimos buscando.
            remaining = String.slice(line, String.length(match)..String.length(line))
            {type, match, remaining}
          nil -> false
        end
      end)

    # Seguimos buscando tokens en el resto de la línea.
    find_token(remaining_line, [{token_type, token} | res])
  end

  # Esta función genera el HTML a partir de la lista de tokens.
  def doHtml(list, out_fd) do
    # Escribimos el inicio del documento HTML.
    IO.puts(out_fd, """
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>Document</title>
    </head>
    <body>
    <pre><code>
    """)

    # Generamos el contenido HTML a partir de la lista de tokens.
    html_content =
      Enum.map(list, fn {class, word} ->
        word = to_string(word)
        escaped_word = String.replace(word, "<", "<")
                        |> String.replace(">", ">")
        class_string = Atom.to_string(class)
        css_class = String.replace(class_string, ":", "_")

        cond do
          class == :space -> " "
          class == :newline -> "\n"
          true ->  "<span class=\"#{css_class}\">#{escaped_word}</span>"
        end
      end)
      |> Enum.join("")

    # Escribimos el contenido HTML en el archivo de salida.
    IO.puts(out_fd, html_content)

    # Escribimos el final del documento HTML.
    IO.puts(out_fd, """
    </code></pre>
    </body>
    </html>
    """)

  end
end

# Obtenemos el nombre del archivo de entrada de los argumentos del sistema.
[in_filename] = System.argv()
# Generamos el nombre del archivo de salida a partir del nombre del archivo de entrada.
out_filename = String.replace(in_filename, ~r/(\.\w+$)/, "-tokens.html")
# Llamamos a la función tokenize con los nombres de los archivos de entrada y salida.
PyLexer.tokenize(in_filename, out_filename)
