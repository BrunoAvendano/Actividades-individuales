/*
Manage the flow of simon
Keep track of turn, and list of buttons to press

Bruno Avendaño
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro; 

public class SimonController : MonoBehaviour
{
    [SerializeField] List<SimonButton> buttons;
    [SerializeField] List<int> sequence;
    [SerializeField] float delay;
    [SerializeField] int level;
    [SerializeField] bool playerTurn = false;

    [SerializeField] int counter = 0;
    [SerializeField] int numButtons;
    [SerializeField] GameObject buttonPrefab;
    [SerializeField] Transform buttonParent;

    public TMP_Text levelText;

    public TMP_Text gameOverText;



    //[SerializeField] Text scoreText;
    // Start is called before the first frame update
    void Start()

        /*if(!PlayerPrefs.HasKey("HighScore")){
            PlayerPrefs.SetIn("HighScore", 0);
        }

        scoreText.text = "Score: 0 - High Score: " + PlayerPrefs.GetInt("HighScore")*/
    {
        // Configure the buttons to be used in the game
        PrepareButtons();
    }

    // Configure the callback functions for the buttons
    void PrepareButtons()
    {
        for (int i=0; i<numButtons; i++) {
            int index = i;
            // Create the copies of the button as children of the panel
            GameObject newButton = Instantiate(buttonPrefab, buttonParent);
            newButton.GetComponent<Image>().color = Color.HSVToRGB((float)index/numButtons, 1, 1);
            newButton.GetComponent<SimonButton>().Init(index);
            buttons.Add(newButton.GetComponent<SimonButton>());
            buttons[i].gameObject.GetComponent<Button>().onClick.AddListener(() => ButtonPressed(index));
        }
        // Start the game by adding the first button
        AddToSequence();

        //scoreText.text = "Score: 0 - High Score: " + PlayerPrefs.GetInt("HighScore")

    }

    // Main function to validate that the button pressed by the user 
    // corresponds with the sequence generated by the CPU
    public void ButtonPressed(int index) {
        if (playerTurn) {
            if (index == sequence[counter++]) {
                // Highlight the button selected by the player
                buttons[index].Highlight();
                if (counter == sequence.Count) {
                    // Finish the player turn to ensure no other actions are
                    // taken into account
                    playerTurn = false;
                    level++;
                    levelText.text = "Level: " + level;
                    counter = 0;
                    AddToSequence();
                }
            } else {
                Debug.Log("Game Over! :(");
                gameOverText.gameObject.SetActive(true);

            }
        }
    }

    // Add another number to the sequence and display it
    void AddToSequence()
    {
        // Add a new button to the sequence
        sequence.Add(Random.Range(0, buttons.Count));
        StartCoroutine(PlaySequence());
    }

    // Display every button in the sequence so far
    IEnumerator PlaySequence()
    {
        /*if(sequence.Count > PlayerPrefs.GetInt("highScore")){
          scoreText.text = "Score: " + sequence.Count + " High Score: " + PlayerPrefs.GetInt("HighScore")
        }
        */
        // Add an initial delay before showing the sequence
        yield return new WaitForSeconds(delay);
        foreach (int index in sequence) {
            buttons[index].Highlight();
            yield return new WaitForSeconds(delay);

            yield return new WaitForSeconds(0.5f);
        }
        // Switch the turn over to the player
        playerTurn = true;

    }
}