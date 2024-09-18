/*
  Design a simple class DocumentManager that manages a collection of documents.
  Each document should have a title, content, and sensitivity level.

  The DocumentManager should be able to:
  - Add a new document.
  - Get all documents sorted by sensitivity level.
  - Search for documents by title.
*/

class Document {
  constructor(title, content, sensitivityLevel) {
    this.title = title;
    this.content = content;
    this.sensitivityLevel = sensitivityLevel;
  }
}

class DocumentManager {
  constructor() {
    this.documents = [];
  }

  addDocument(document) {
    // Implement adding document logic
    if (!(document instanceof Document))
      throw new Error('input needs to be an instance of Document!');

    this.documents.push(document);
  }

  getDocumentsSortedBySensitivity() {
    // Implement sorting logic
    return this.documents.toSorted(
      (a, b) => b.sensitivityLevel - a.sensitivityLevel
    );
  }

  searchDocumentByTitle(title) {
    // Implement search logic
    return this.documents.filter(doc =>
      doc.title.toLowerCase().includes(title.toLowerCase())
    );
  }
}

// Example Usage:
const docManager = new DocumentManager();
docManager.addDocument(new Document('Doc1', 'Content of Doc1', 2));
docManager.addDocument(new Document('Doc2', 'Content of Doc2', 1));
docManager.addDocument(new Document('Doc3', 'Content of Doc3', 4));
docManager.addDocument(new Document('test', 'Content of test', 10));
// docManager.addDocument('doc'); // should throw
// Implement more example scenarios

console.log(docManager.getDocumentsSortedBySensitivity()); // should return the array sorted in descending order
console.log(docManager); // should remain in the original order
console.log(docManager.searchDocumentByTitle('te')); // should return doc with title test
