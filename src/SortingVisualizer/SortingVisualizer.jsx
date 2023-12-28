import React from "react";
import * as sortingAlgos from './sortingAlgos/sortingAlgos.js';
import './SortingVisualizer.css';

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount(){
        this.resetArray();
    }

    resetArray(){
        const array = [];
        for (let i = 0; i < 210; i++){
            array.push(randomIntFromInterval(5,700));
        }
        this.setState({array});

    }
    bubbleSort(){}
    mergeSort(){
        const javaScriptSortedArray = this.state.array.slice().sort((a,b)=> a-b);
        const sortedArray = sortingAlgos.mergeSort(this.state.array);

        console.log(arraysAreEqual(javaScriptSortedArray, sortedArray));
    }
    quickSort(){}
    render(){
        const {array} = this.state;
        return (
            <div className="array-container">
            <>
                {array.map((value, index) => (
                    <div className="array-bar" 
                    key={index} 
                    style={{height: `${value}px`}}></div>
                ))}
            </>
            <br />
            <button onClick={() => this.resetArray()}>Generate a New Array!</button>
            <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
            <button onClick={() => this.mergeSort()}>Merge Sort</button>
            <button onClick={() => this.quickSort()}>Quick Sort</button>
            </div>
            
        );
    }
}

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random() * (max - min + 1)+min);
}

function arraysAreEqual(arr1, arr2){
    if (arr1.length !== arr2.length) return false;
    for(let i = 0; i < arr1.length; i++){
        if (arr1[i] !== arr2[i]) return false; 
    }
    return true;
}