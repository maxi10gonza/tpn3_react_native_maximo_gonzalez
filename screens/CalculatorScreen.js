import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Dimensions
} from 'react-native';

const { width } = Dimensions.get('window');

export default function CalculatorScreen() {
    const [display, setDisplay] = useState('0');
    const [previousValue, setPreviousValue] = useState(null);
    const [operation, setOperation] = useState(null);
    const [waitingForOperand, setWaitingForOperand] = useState(false);

    const inputNumber = (num) => {
        if (waitingForOperand) {
        setDisplay(String(num));
        setWaitingForOperand(false);
        } else {
        setDisplay(display === '0' ? String(num) : display + num);
        }
    };

    const inputOperator = (nextOperator) => {
        const inputValue = parseFloat(display);

        if (previousValue === null) {
        setPreviousValue(inputValue);
        } else if (operation) {
        const currentValue = previousValue || 0;
        const newValue = calculate(currentValue, inputValue, operation);

        setDisplay(String(newValue));
        setPreviousValue(newValue);
        }

        setWaitingForOperand(true);
        setOperation(nextOperator);
    };

    const calculate = (firstValue, secondValue, operation) => {
        switch (operation) {
        case '+':
            return firstValue + secondValue;
        case '-':
            return firstValue - secondValue;
        case '×':
            return firstValue * secondValue;
        case '÷':
            return firstValue / secondValue;
        case '=':
            return secondValue;
        default:
            return secondValue;
        }
    };

    const performCalculation = () => {
        const inputValue = parseFloat(display);

        if (previousValue !== null && operation) {
        const newValue = calculate(previousValue, inputValue, operation);
        setDisplay(String(newValue));
        setPreviousValue(null);
        setOperation(null);
        setWaitingForOperand(true);
        }
    };

    const clear = () => {
        setDisplay('0');
        setPreviousValue(null);
        setOperation(null);
        setWaitingForOperand(false);
    };

    const clearEntry = () => {
        setDisplay('0');
        setWaitingForOperand(false);
    };

    const inputDecimal = () => {
        if (waitingForOperand) {
        setDisplay('0.');
        setWaitingForOperand(false);
        } else if (display.indexOf('.') === -1) {
        setDisplay(display + '.');
        }
    };

    const Button = ({ onPress, text, size = 1, color = '#333', bgColor = '#f1f1f1' }) => {
        const buttonWidth = (width - 80) / 4;
        
        return (
        <TouchableOpacity
            style={[
            styles.button,
            {
                width: buttonWidth * size + (size - 1) * 10,
                backgroundColor: bgColor,
            },
            ]}
            onPress={onPress}
        >
            <Text style={[styles.buttonText, { color }]}>
            {text}
            </Text>
        </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.displayContainer}>
            <Text style={styles.display} numberOfLines={1} adjustsFontSizeToFit>
            {display}
            </Text>
        </View>

        <View style={styles.buttonsContainer}>
            <View style={styles.row}>
            <Button text="C" onPress={clear} bgColor="#FF9500" color="white" />
            <Button text="CE" onPress={clearEntry} bgColor="#FF9500" color="white" />
            <Button text="±" onPress={() => {}} bgColor="#FF9500" color="white" />
            <Button text="÷" onPress={() => inputOperator('÷')} bgColor="#FF9500" color="white" />
            </View>

            <View style={styles.row}>
            <Button text="7" onPress={() => inputNumber(7)} />
            <Button text="8" onPress={() => inputNumber(8)} />
            <Button text="9" onPress={() => inputNumber(9)} />
            <Button text="×" onPress={() => inputOperator('×')} bgColor="#FF9500" color="white" />
            </View>

            <View style={styles.row}>
            <Button text="4" onPress={() => inputNumber(4)} />
            <Button text="5" onPress={() => inputNumber(5)} />
            <Button text="6" onPress={() => inputNumber(6)} />
            <Button text="-" onPress={() => inputOperator('-')} bgColor="#FF9500" color="white" />
            </View>

            <View style={styles.row}>
            <Button text="1" onPress={() => inputNumber(1)} />
            <Button text="2" onPress={() => inputNumber(2)} />
            <Button text="3" onPress={() => inputNumber(3)} />
            <Button text="+" onPress={() => inputOperator('+')} bgColor="#FF9500" color="white" />
            </View>

            <View style={styles.row}>
            <Button text="0" onPress={() => inputNumber(0)} size={2} />
            <Button text="." onPress={inputDecimal} />
            <Button text="=" onPress={performCalculation} bgColor="#FF9500" color="white" />
            </View>
        </View>

        <View style={styles.historyContainer}>
            <Text style={styles.historyTitle}>Funciones básicas:</Text>
            <Text style={styles.historyText}>• Suma, resta, multiplicación y división</Text>
            <Text style={styles.historyText}>• C: Limpiar todo</Text>
            <Text style={styles.historyText}>• CE: Limpiar entrada actual</Text>
            <Text style={styles.historyText}>• Soporte para decimales</Text>
        </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    displayContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    display: {
        fontSize: 48,
        color: 'white',
        fontWeight: '200',
    },
    buttonsContainer: {
        padding: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    button: {
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 35,
    },
    buttonText: {
        fontSize: 24,
        fontWeight: '400',
    },
    historyContainer: {
        backgroundColor: '#1a1a1a',
        padding: 20,
        margin: 20,
        borderRadius: 10,
    },
    historyTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    historyText: {
        color: '#ccc',
        fontSize: 14,
        marginBottom: 5,
    },
});