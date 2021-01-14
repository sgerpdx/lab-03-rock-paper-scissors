// IMPORT MODULES under test here:
import {testIfWin } from '../utils.js';

const test = QUnit.test;

test('if passed rock and scissors expected output is win', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'win';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = testIfWin('rock', 'scissors');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('if passed rock and paper expected output is lose', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'lose';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = testIfWin('rock', 'paper');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('if passed rock and rock expected output is draw', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'draw';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = testIfWin('rock', 'rock');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('if passed paper and rock expected output is win', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'win';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = testIfWin('paper', 'rock');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('if passed paper and scissors expected output is lose', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'lose';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = testIfWin('paper', 'scissors');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('if passed paper and paper expected output is win', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'draw';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = testIfWin('paper', 'paper');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('if passed scissors and rock expected output is lose', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'lose';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = testIfWin('scissors', 'rock');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('if passed scissors and paper expected output is win', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'win';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = testIfWin('scissors', 'paper');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('if passed scissors and scissors expected output is win', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'draw';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = testIfWin('scissors', 'scissors');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});