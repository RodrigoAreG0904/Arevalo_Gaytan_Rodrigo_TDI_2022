package paq;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author roiar
 */
public class Counter {
    private int count = 1;
    
    public Counter(){}
    
    public int getCount(){
        return count++;
    }
    
    public void setCount(int c){
        count = c;
    }
}
