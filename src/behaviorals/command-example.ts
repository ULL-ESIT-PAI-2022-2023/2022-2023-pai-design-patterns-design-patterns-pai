abstract class Command {
    abstract execute(currentValue: number): number;
    abstract undo(currentValue: number): number;
    constructor(protected value: number = 0) {}
}
class Calculator {
    private current: number = 0;
    private commands: Command[] = [];

    getCurrent(): number {
        return this.current;
    }

    executeCommand(command: Command): void {
        this.current = command.execute(this.current);
        this.commands.push(command);
        console.log(this.current);
    }

    undo(): void {
        const command = this.commands.pop();
        if (command) this.current = command.undo(this.current);
        console.log(this.current);
    }
}

class AddCommand extends Command {
    constructor(value: number) {
        super();
        this.value = value;
    }

    execute(currentValue: number): number {
        return currentValue + this.value;
    }

    undo(currentValue: number): number {
        return currentValue - this.value;
    }
}

class SubtractCommand extends Command {
    constructor(value: number) {
        super();
        this.value = value;
    }

    execute(currentValue: number): number {
        return currentValue - this.value;
    }

    undo(currentValue: number): number {
        return currentValue + this.value;
    }
}

let calculator = new Calculator();
calculator.executeCommand(new AddCommand(5)); // 5
calculator.executeCommand(new SubtractCommand(2)); // 3
calculator.executeCommand(new AddCommand(10)); // 13

calculator.undo(); // 3
calculator.undo(); // 5
calculator.undo(); // 0






