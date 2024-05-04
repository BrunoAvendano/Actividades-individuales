/*Detect when the ball hits the goal*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PongGoal : MonoBehaviour
{
    [SerializeField] string side;

// variable to reference another script
    public PongManager manager;
    void Start()
    {
        manager = GameObject.Find("GameManager").GetComponent<PongManager>();
    }

    void OnCollisionEnter2D(Collision2D other)
    {
        manager.Score(side);
        Destroy(other.gameObject);
    }
}
