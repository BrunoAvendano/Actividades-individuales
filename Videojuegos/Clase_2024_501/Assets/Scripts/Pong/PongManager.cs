/* Game manager for the Pong DEMO

Natalia Rodriguez Guevara
10/abr/24
*/


using System.Collections;
using System.Collections.Generic;
using UnityEngine;
// Necessary to display text in the UI
using TMPro;

public class PongManager : MonoBehaviour
{

    [SerializeField] GameObject ball;

    [SerializeField] GameObject ballPrefab;
    [SerializeField] float speed;

    [SerializeField] TMP_Text scoreLeft;
    [SerializeField] TMP_Text scoreRight;



    public int pointsLeft;
    public int pointsRight;
    // Start is called before the first frame update
    void Start()
    {
        InitGame();
    }

    // Update is called once per frame
    void Update()
    {
        if(Input.GetKeyDown(KeyCode.R) && ball != null){
            Reset();
        }
    }

    public void Reset(){
        // check that there is a ball
        if (ball != null){
            Destroy(ball);
            InitGame();
        }
    }

    void InitGame(){
        StartCoroutine(ServeBall());
    }
    IEnumerator ServeBall()
    {
        yield return new WaitForSeconds(1.0f);
        ball = Instantiate(ballPrefab);
        ball.GetComponent<Rigidbody2D>().velocity
        = Random.insideUnitCircle.normalized * speed;
    }
    // increase the score of the specified player
    public void Score(string side){
        if(side == "left"){
            pointsLeft++;
            scoreLeft.text = pointsLeft.ToString();
            InitGame();
        }else if(side == "right"){
            pointsRight++;
            scoreRight.text = pointsRight.ToString();
            InitGame();
        }
    }
}
