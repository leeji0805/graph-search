import React, { useState } from 'react';

// Graph 클래스 정의
class Graph {
    constructor() {
        this.graph = {};
    }

    addNode(node) {
        if (!this.graph[node]) {
            this.graph[node] = [];
        }
    }

    addEdge(node1, node2) {
        if (this.graph[node1] && this.graph[node2]) {
            this.graph[node1].push(node2);
            this.graph[node2].push(node1); // 무방향 그래프
        }
    }

    bfs(startNode) {
        let visited = new Set();
        let queue = [startNode];
        let bfsOrder = [];

        while (queue.length > 0) {
            let node = queue.shift();
            if (!visited.has(node)) {
                visited.add(node);
                bfsOrder.push(node);
                this.graph[node].forEach(neighbor => {
                    if (!visited.has(neighbor)) {
                        queue.push(neighbor);
                    }
                });
            }
        }

        return bfsOrder;
    }

    dfs(startNode) {
        let visited = new Set();
        let stack = [startNode];
        let dfsOrder = [];

        while (stack.length > 0) {
            let node = stack.pop();
            if (!visited.has(node)) {
                visited.add(node);
                dfsOrder.push(node);
                this.graph[node].forEach(neighbor => {
                    if (!visited.has(neighbor)) {
                        stack.push(neighbor);
                    }
                });
            }
        }

        return dfsOrder;
    }
}

const GraphSearch = () => {
    const [bfsResult, setBfsResult] = useState([]);
    const [dfsResult, setDfsResult] = useState([]);

    const graph = new Graph();
    const nodes = Array.from({ length: 15 }, (_, i) => i + 1);

    nodes.forEach(node => graph.addNode(node));

    const edges = [
        [1, 2], [1, 3], [2, 4], [2, 5], [3, 6], [3, 7],
        [4, 8], [5, 9], [6, 10], [7, 11], [8, 12], [9, 13],
        [10, 14], [11, 15]
    ];

    edges.forEach(([node1, node2]) => graph.addEdge(node1, node2));

    const handleBfs = () => {
        const result = graph.bfs(1);
        setBfsResult(result);
    };

    const handleDfs = () => {
        const result = graph.dfs(1);
        setDfsResult(result);
    };

    return (
        <div>
            <h1>Graph Search</h1>
            <button onClick={handleBfs}>Run BFS</button>
            <button onClick={handleDfs}>Run DFS</button>
            <div>
                <h2>BFS Result:</h2>
                <p data-testid="bfs-result">{bfsResult.join(', ')}</p>
            </div>
            <div>
                <h2>DFS Result:</h2>
                <p data-testid="dfs-result">{dfsResult.join(', ')}</p>
            </div>
        </div>
    );
};

export default GraphSearch;
