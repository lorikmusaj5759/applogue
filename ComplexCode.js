/*
FILENAME: ComplexCode.js
DESCRIPTION: This code demonstrates a complex implementation of a data structure called Trie, which is used for efficient prefix-based searching in massive datasets.
*/

class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word.charAt(i);
      if (!current.children.has(char))
        current.children.set(char, new TrieNode());

      current = current.children.get(char);
    }
    current.isEndOfWord = true;
  }

  search(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word.charAt(i);
      if (!current.children.has(char))
        return false;

      current = current.children.get(char);
    }
    return current.isEndOfWord;
  }

  delete(word) {
    this._delete(this.root, word, 0);
  }

  _delete(current, word, index) {
    if (index === word.length) {
      if (!current.isEndOfWord)
        return false;

      current.isEndOfWord = false;
      return current.children.size === 0;
    }

    const char = word.charAt(index);
    if (!current.children.has(char))
      return false;

    const childNode = current.children.get(char);
    const shouldDeleteCurrentNode = this._delete(childNode, word, index + 1);

    if (shouldDeleteCurrentNode) {
      current.children.delete(char);
      return current.children.size === 0;
    }

    return false;
  }
}

// Example usage
const trie = new Trie();
trie.insert("apple");
trie.insert("banana");
trie.insert("cherry");

console.log(trie.search("apple")); // Output: true
console.log(trie.search("banana")); // Output: true
console.log(trie.search("cherry")); // Output: true
console.log(trie.search("mango")); // Output: false

trie.delete("banana");
console.log(trie.search("banana")); // Output: false
console.log(trie.search("apple")); // Output: true
console.log(trie.search("cherry")); // Output: true

console.log(trie.search("man")); // Output: false
trie.insert("man");
console.log(trie.search("man")); // Output: true

console.log(trie.search("manipulate")); // Output: false
console.log(trie.search("mango")); // Output: false
trie.insert("mango");
console.log(trie.search("manipulate")); // Output: false
console.log(trie.search("mango")); // Output: true

// ... (more complex scenarios, use cases, and operations)