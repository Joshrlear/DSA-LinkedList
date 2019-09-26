class LinkedList {
    constructor() {
        this.ticks = 0
        this.head = null;
    }

    insertFirst(item) {
        this.ticks += 1
        this.head = new _Node(item, this.head)
    }
    
    insertBefore(item, insertBeforeValue) {
        this.ticks += 1
        // is list empty
        if (!this.head) {
            return null
        }
        // is currNode the head of linkedList?
        if (insertBeforeValue === this.head.value) {
            prevNode.next = new _Node(item, currNode)
        }
        // define prev curr node
        let prevNode = this.head
        let currNode = this.head

        while (currNode !== null && currNode.value !== insertBeforeValue) {
            this.ticks += 1
            // move to next node
            prevNode = currNode
            currNode = currNode.next
            // currentNode is null (end of list)
            if (currNode === null) {
                console.log('can\'t insert before item that does\'t exist')
                return
            }
        }
        // found node to insert infront of
        // linking new node to prevNode.next
        // and pointing new Node.next to currNode
        prevNode.next = new _Node(item, currNode)
        return
    }

    insertAfter(item, insertAfterValue) {
        this.ticks += 1
        // is list empty
        if (!this.head) { return }
        // define current node
        let currNode = this.head
        // is insertAfterValue first in list
        if (currNode.value === insertAfterValue) {
            currNode.next = new _Node(item, currNode.next)
        }
        // loop while currNode.next not equal to insertAfterValue
        while (currNode !== null && currNode.value !== insertAfterValue) {
            this.ticks += 1
            // move to next node
            currNode = currNode.next
            // currNode not in list
            if (currNode === null) { 
                console.log('can\'t insert after item that does\'t exist')
                return
            }
        }
        // found, currNode.next = new _Node(item, currNode.next)
        currNode.next = new _Node(item, currNode.next)
        return
    }

    insertAt(item, position) {
        // is list empty
        if (!this.head) { return }
        // is position === 1, insert first
        if (position === 1) {
            this.head = new _Node(item, this.head)
        }
        // define count, currNode and prevNode
        let count = 1
        let prevNode = this.head
        let currNode = this.head
        // while currNode !== null && count is !== position
        while(currNode !== null && count !== position) {
            // increment count
            count += 1
            // go to next node
            prevNode = currNode
            currNode = currNode.next
            // position not found
            if (currNode === null) { 
                console.log('list does not contain the position requested')
                return
            }
        }
        // found, insert before, prevNode.next = item, and item.next = currNode
        prevNode.next = new _Node(item, currNode)
    }

    insertLast(item) {
        if (this.head === null) {
            this.ticks += 1
            this.insertFirst(item)
        }
        else {
            let tempNode = this.head
            while ( tempNode.next !== null) {
                this.ticks += 1
                tempNode = tempNode.next
            }
            tempNode.next = new _Node(item, null)
        }
    }

    find(item) {
        let currNode = this.head
        if (!this.head) {
            this.ticks += 1
            return {
                status: null, 
                ticks: this.ticks
            }
        }
        else {
            while (currNode.value !== item) {
                this.ticks += 1
                if (currNode.next === null ) {
                    return {
                        status: null, 
                        ticks: this.ticks
                    }
                }
                else {
                    currNode = currNode.next
                }
            }
            let info = {
                currNode,
                ticks: this.ticks
            }
            return info
        }
    }

    remove(item) {
        this.ticks += 1
        // is list empty
        if (!this.head) {
            return null
        }
        // item in head (first in list)
        if (this.head.value === item) {
            this.head = this.head.next
            return
        }
        // define prev curr node
        let prevNode = this.head
        let currNode = this.head
        // while next node isn't null and currentNode value on item
        while (currNode.next !== null && currNode.value !== item) {
            this.ticks += 1
            // move to next node
            prevNode = currNode
            currNode = currNode.next
            // currentNode is null (end of list)
            if (currNode === null) {
                console.log('Item not found')
                return
            }
        }
        // found value, set prev node.next to curr node.next
        prevNode.next = currNode.next
    }
    createLoop(item) {
        let tempNode = this.head
        while ( tempNode.next !== null) {
            this.ticks += 1
            tempNode = tempNode.next
        }
        tempNode.next = new _Node(item, this.head.next.next)
        this.head.next.next = tempNode.next
    }
}

class _Node {
    constructor(value, next) {
        this.value = value
        this.next = next
    } 
}

function greatestShowEver() {
    let entourage = new LinkedList()
    entourage.insertFirst('Vince')
    entourage.insertLast('Drama')
    entourage.insertLast('E')
    //console.log('find Tutrle:',entourage.find('Turtle'))
    entourage.insertLast('Turtle')
    entourage.insertLast('Awnold') // gotta have some puppy love!
    entourage.insertLast('Ari')
    entourage.insertBefore('Lloyd','Turtle')
    entourage.insertAfter('Billy Walsh','Awnold')
    //console.log('entourage before E removed:',JSON.stringify(entourage))
    entourage.remove('E')
    //console.log('entourage after E removed:',JSON.stringify(entourage))
    entourage.insertAt('E', 3)
    entourage.createLoop('sloan')
    //console.log('entourage E inserted at position 3:',JSON.stringify(entourage))
    //console.log('find E:',entourage.find('E'))
    //console.log('find Ari:',entourage.find('Ari'))
    //console.log('find Drama:',entourage.find('Drama'))
    return entourage
}

//greatestShowEver()
const list = greatestShowEver()
let ticks = 0

function reverse(list) {
    ticks ++
    // is list empty
    // base case
    if (!list.head === null) { console.log('here:', list) }
    // only one value in list
    else if (list.head.next === null) { console.log('not there, here:', list) }
    //general case
    else {
        // declare firstNode, currNode and nextNode
        let currNode = list.head
        let prevNode;
        let nextNode;

        while(currNode !== null) {
            ticks ++
            nextNode = currNode.next
            currNode.next = prevNode
            prevNode = currNode
            currNode = nextNode

        }
        list.head = prevNode
        return prevNode
    }
    
}

//console.log(JSON.stringify(reverse(list)), ticks)

function nthFromList(list, n) {
    // empty list]
    if (!list.head) {
        ticks ++
        return
    }
    // declare currNode & endNode
    let currNode = list.head
    let endNode = list.head
    let i = 1
    while (i <= n - 1) {
        ticks ++
        endNode = endNode.next
        i ++
    }
    while (endNode.next !== null) {
        ticks ++
        currNode = currNode.next
        endNode = endNode.next
    }
    return currNode
}
//console.log(nthFromList(list, 3), ticks)

function middle(list) {
    if (!list.head) { 
        ticks ++    
        return 
    }
    let middle = list.head
    let end = list.head
    while (end !== null && end.next !== null) {
        ticks ++
        middle = middle.next
        end = end.next.next
    }
    return middle
}
//console.log(middle(list), ticks)

function cycle(list) {
    
    if (!list.head) { return }
    let start = list.head
    let slow = list.head
    let fast = list.head
    
    while (slow && fast && fast.next) {
        //console.log('nodes', slow)
        slow = slow.next
        fast = fast.next.next
        if (slow === fast) { 
            while (slow !== start) {
                prevNode = slow
                slow = slow.next
                start = start.next
            }
            return ({
                'start of loop': slow, 
                'end of list': prevNode
            })
         }
    }
    return 'no loop'
}

console.log(cycle(list))