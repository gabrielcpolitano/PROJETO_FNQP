// You are given the head node of a singly-linked list. Write a method that swaps each pair of nodes in the list, then returns the head node of the list. You have to swap the nodes themselves, not their values.

// Example:

// (A --> B --> C --> D) => (B --> A --> D --> C)

// The swapping should be done left to right, so if the list has an odd length, the last node stays in place:

// (A --> B --> C) => (B --> A --> C)

function swapPairs(head) {
    
    const helper = new Node(0);
    helper.next = head;
    let current = helper;

    while (current.next !== null && current.next.next !== null) {
       
        const first = current.next;
        const second = current.next.next;

        first.next = second.next;
        second.next = first;
        current.next = second;

        current = first;
    }

    return helper.next;
}


//tests from codewars
describe('sample tests', function() {

    const chai = require('chai'), { deepEqual } = chai.assert;
    chai.config.truncateThreshold = 0;

    function stringFromArray(nodesArray) {
        return nodesArray.map(({value}) => value).join(' -> ');        
    }

    function listFromArray(nodesArray) {
        if (nodesArray.length === 0)
            return null;
        const head = nodesArray[0];
        for (let i = 1; i < nodesArray.length; i++)
            nodesArray[i - 1].next = nodesArray[i];

        nodesArray.at(-1).next = null;
        return head;
    }

    function arrayFromList(list) {
        const seen = new Set(), nodesArray = [];
        for (let node = list; node !== null; node = node.next) {
            if (seen.has(node))
                throw new Error("you introduced a cycle in the list !");
            seen.add(node);
            nodesArray.push(node);
        }
        return nodesArray;
    }

    function doTest(inputNodes, expectedNodes) {
        const expValues = expectedNodes.map(({value}) => value);
        const list = listFromArray(inputNodes);

        const actualList = swapPairs(list);
        const actualNodes = arrayFromList(actualList);
        deepEqual(actualNodes, expectedNodes,
            `expected:\n${stringFromArray(expectedNodes)}\nbut got:\n${stringFromArray(actualNodes)}\n`
        );

        const actValues = actualNodes.map(({value}) => value);
        deepEqual(actValues, expValues, "do not change the nodes' values");
    }

    it('(empty list)', function() {
        doTest([], []);
    });

    it('A', function() {
        const a = new Node('A');
        doTest([a], [a]);
    });

    it('A -> B', function() {
        const a = new Node('A'), b = new Node('B');
        doTest([a, b], [b, a]);
    });

    it('A -> B -> C', function() {
        const a = new Node('A'), b = new Node('B'), c = new Node('C');
        doTest([a, b, c], [b, a, c]);
    });

    it('A -> B -> C -> D', function() {
        const a = new Node('A'), b = new Node('B'), c = new Node('C'), d = new Node('D');
        doTest([a, b, c, d], [b, a, d, c]);
    });
});