/*Detects when the ball goes out of bounce

Bruno Avendaño Toledo*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PongGoal : MonoBehaviour
{

    [SerializeField] string side;

    //Varible to reference another script

    PongManager manager;

    // Start is called before the first frame update
    void Start()
    {
        manager = GameObject.FindWithTag("GameController").GetComponent<PongManager>(); 
    }

    void OnCollisionEnter2D(Collision2D other){
        manager.Score(side);
        Destroy(other.gameObject);
    }

}
