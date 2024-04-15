/*Bruno AVendaño

Game manager for the pong demo

2024-10-04*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PongManager : MonoBehaviour
{

    [SerializeField] GameObject ball;
    [SerializeField] GameObject ballPrefab;
    [SerializeField] float speed;
    // Start is called before the first frame update

public int pointsLeft;
public int pointsRight;
    void Start()
    {
        InitGame();
        
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.R) && ball != null)
        {
            
        }
    }

    void InitGame()
    {
        StartCoroutine(ServeBall());
    }
    IEnumerator ServeBall()
    {
        yield return new WaitForSeconds (1.0f);
        ball = Instantiate(ballPrefab);
        ball.GetComponent<Rigidbody2D>().velocity = Random.insideUnitCircle.normalized * speed;
    }
    

    public void Score(string side)
    {
        if (side == "left"){
            pointsLeft++;
            InitGame();
        } else if (side == "right"){
            pointsRight++;
            InitGame();
        }
    }
}
