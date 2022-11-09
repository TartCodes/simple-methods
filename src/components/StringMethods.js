import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const StringMethods = () => {
  return (
    <Container>
      <Accordion>
        <Row>
          {/* left column */}
          <Col>
            <Accordion.Item eventKey="0">
              <Accordion.Header>String.prototype.at()</Accordion.Header>
              <Accordion.Body>
                The at() method takes an integer value and returns a new String
                consisting of the single UTF-16 code unit located at the
                specified offset. This method allows for positive and negative
                integers. Negative integers count back from the last string
                character.{" "}
                <a
                  target="_blank"
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/at"
                  rel="noreferrer"
                >
                  MDN Link
                </a>
              </Accordion.Body>
              <Accordion.Body>
                Example:
                <br />
                <code>
                  const sentence = 'The quick brown fox jumps over the lazy
                  dog.'
                  <br />
                  const index = 4;
                  <br />
                  console.log(`Using an index of ${"{index}"} the character
                  returned is ${"{sentence.at(index)}"}`)
                  <br />
                  expected output: "Using an index of 5 the character returned
                  is u"
                  <br />
                  index = -4;
                  <br />
                  console.log(`Using an index of ${"{index}"} the character
                  returned is ${"{sentence.at(index)}"}`);
                  <br />
                  expected output: "Using an index of -4 the character returned
                  is d"
                </code>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>String.prototype.charCodeAt()</Accordion.Header>
              <Accordion.Body>
                The charCodeAt() method returns an integer between 0 and 65535
                representing the UTF-16 code unit at the given index.{" "}
                <a
                  target="_blank"
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt"
                  rel="noreferrer"
                >
                  MDN Link
                </a>
              </Accordion.Body>
              <Accordion.Body>
                Example:
                <br />
                <code>
                  const sentence = 'The quick brown fox jumps over the lazy
                  dog.'
                  <br />
                  const index = 4;
                  <br />
                  console.log(`The character code $
                  {"{sentence.charCodeAt(index)}"} is equal to
                  <br />${"{sentence.charAt(index)}"});
                  <br />
                  expected output: "The character code 113 is equal to q"
                </code>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>String.prototype.concat()</Accordion.Header>
              <Accordion.Body>
                The concat() method concatenates the string arguments to the
                calling string and returns a new string.{" "}
                <a
                  target="_blank"
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat"
                  rel="noreferrer"
                >
                  MDN Link
                </a>
              </Accordion.Body>
              <Accordion.Body>
                Example:
                <code>
                  <br />
                  const str1 = 'Hello';
                  <br />
                  const str2 = 'World';
                  <br />
                  console.log(str1.concat(' ', str2)); // expected output:
                  "Hello World" console.log(str2.concat(', ', str1)); //
                  expected output: "World, Hello"
                </code>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>String.fromCharCode()</Accordion.Header>
              <Accordion.Body>
                The static String.fromCharCode() method returns a string created
                from the specified sequence of UTF-16 code units.{" "}
                <a
                  target="_blank"
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode"
                  rel="noreferrer"
                >
                  MDN Link
                </a>
              </Accordion.Body>
              <Accordion.Body>
                Example:
                <br />
                <code>
                  console.log(String.fromCharCode(189, 43, 190, 61));
                  <br />
                  expected output: "½+¾="
                </code>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="8">
              <Accordion.Header>String.prototype.includes()</Accordion.Header>
              <Accordion.Body>
                The includes() method performs a case-sensitive search to
                determine whether one string may be found within another string,
                returning true or false as appropriate.{" "}
                <a
                  target="_blank"
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes"
                  rel="noreferrer"
                >
                  MDN Link
                </a>
              </Accordion.Body>
              <Accordion.Body>
                Example:
                <br />
                <code>
                  const sentence = 'The quick brown fox jumps over the lazy
                  dog.';
                  <br />
                  const word = 'fox';
                  <br />
                  console.log(`The word "${"{word}}"} $
                  {"{sentence.includes(word) ? 'is' : 'is not'}"} in the
                  sentence`)
                  <br />
                  expected output: "The word "fox" is in the sentence"
                </code>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="10">
              <Accordion.Header>
                String.prototype.lastIndexOf()
              </Accordion.Header>
              <Accordion.Body>
                The lastIndexOf() method, given one argument: a substring to
                search for, searches the entire calling string, and returns the
                index of the last occurrence of the specified substring. Given a
                second argument: a number, the method returns the last
                occurrence of the specified substring at an index less than or
                equal to the specified number.{" "}
                <a
                  target="_blank"
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf"
                  rel="noreferrer"
                >
                  MDN Link
                </a>
              </Accordion.Body>
              <Accordion.Body>
                Example:
                <br />
                <code>
                  const paragraph = 'The quick brown fox jumps over the lazy
                  dog. If the dog barked, was it really lazy?';
                  <br />
                  const searchTerm = 'dog';
                  <br />
                  const indexOfFirst = paragraph.indexOf(searchTerm);
                  <br />
                  console.log(`The index of the first "${"'{searchTerm}'"} from
                  the end is ${"{paragraph.lastIndexOf(searchTerm)}"}`);
                  <br />
                  expected output: "The index of the first "dog" from the end is
                  52"
                </code>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="12">
              <Accordion.Header>String.prototype.match()</Accordion.Header>
              <Accordion.Body>
                The match() method retrieves the result of matching a string
                against a{" "}
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions">
                  regular expression.
                </a>{" "}
                <a
                  target="_blank"
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match"
                  rel="noreferrer"
                >
                  MDN Link
                </a>
              </Accordion.Body>
              <Accordion.Body>
                Example:
                <br />
                <code>
                  const paragraph = 'The quick brown fox jumps over the lazy
                  dog. It barked.';
                  <br />
                  const regex = /[A-Z]/g; const found = paragraph.match(regex);
                  <br />
                  console.log(found);
                  <br />
                  expected output: Array ["T", "I"]
                </code>
              </Accordion.Body>
            </Accordion.Item>
          </Col>
          {/* ------------ COLUMN 2 ----------            */}
          <Col>
            <Accordion.Item eventKey="3">
              <Accordion.Header>String.prototype.charAt()</Accordion.Header>
              <Accordion.Body>
                The String object's charAt() method returns a new string
                consisting of the single UTF-16 code unit located at the
                specified offset into the string.{" "}
                <a
                  target="_blank"
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt"
                  rel="noreferrer"
                >
                  MDN Link
                </a>
              </Accordion.Body>
              <Accordion.Body>
                <code>
                  Example:
                  <br />
                  const sentence = 'The quick brown fox jumps over the lazy
                  dog.';
                  <br />
                  const index = 4;
                  <br />
                  console.log(`The character at index ${"{index}"} is $
                  {"{sentence.charAt(index)}"}`);
                  <br />
                  expected output: "The character at index 4 is q"
                </code>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                String.prototype.codePointAt()
              </Accordion.Header>
              <Accordion.Body>
                The codePointAt() method returns a non-negative integer that is
                the Unicode code point value at the given position. Note that
                this function does not give the nth code point in a string, but
                the code point starting at the specified string index.{" "}
                <a
                  target="_blank"
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt"
                  rel="noreferrer"
                >
                  MDN Link
                </a>
              </Accordion.Body>
              <Accordion.Body>
                Example:
                <br />
                <code>
                  const icons = '☃★♲'; console.log(icons.codePointAt(1));
                  <br />
                  expected output: "9733"
                </code>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>String.prototype.endsWith()</Accordion.Header>
              <Accordion.Body>
                The endsWith() method determines whether a string ends with the
                characters of a specified string, returning true or false as
                appropriate.{" "}
                <a
                  target="_blank"
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith"
                  rel="noreferrer"
                >
                  MDN Link
                </a>
              </Accordion.Body>
              <Accordion.Body>
                Example:
                <br />
                <code>
                  const str1 = 'Cats are the best!';
                  <br />
                  console.log(str1.endsWith('best!'));
                  <br />
                  expected output: true
                  <br />
                  console.log(str1.endsWith('best', 17));
                  <br />
                  expected output: true
                  <br />
                  const str2 = 'Is this a question?';
                  <br />
                  console.log(str2.endsWith('question'));
                  <br />
                  expected output: false
                </code>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="7">
              <Accordion.Header>String.fromCodePoint()</Accordion.Header>
              <Accordion.Body>
                The static String.fromCodePoint() method returns a string
                created by using the specified sequence of code points.{" "}
                <a
                  target="_blank"
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint"
                  rel="noreferrer"
                >
                  MDN Link
                </a>
              </Accordion.Body>
              <Accordion.Body>
                Example:
                <br />
                <code>
                  console.log(String.fromCodePoint(9731, 9733, 9842, 0x2F804));
                  <br />
                  expected output: "☃★♲你"
                </code>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="9">
              <Accordion.Header>String.prototype.indexOf()</Accordion.Header>
              <Accordion.Body>
                The indexOf() method, given one argument: a substring to search
                for, searches the entire calling string, and returns the index
                of the first occurrence of the specified substring. Given a
                second argument: a number, the method returns the first
                occurrence of the specified substring at an index greater than
                or equal to the specified number.{" "}
                <a
                  target="_blank"
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf"
                  rel="noreferrer"
                >
                  MDN Link
                </a>
              </Accordion.Body>
              <Accordion.Body>
                Example:
                <br />
                <code>
                  const paragraph = 'The quick brown fox jumps over the lazy
                  dog. If the dog barked, was it really lazy?';
                  <br />
                  const searchTerm = 'dog';
                  <br />
                  const indexOfFirst = paragraph.indexOf(searchTerm);
                  <br />
                  console.log(`The index of the first "${"'{searchTerm}'"} from
                  the beginning is ${"{indexOfFirst}"}`);
                  <br />
                  expected output: "The index of the first "dog" from the
                  beginning is 40"
                  <br />
                  console.log(`The index of the 2nd "${"'{searchTerm}'"} is $
                  {"{paragraph.indexOf(searchTerm, indexOfFirst + 1)}"}`);
                  <br />
                  expected output: "The index of the 2nd "dog" is 52"
                </code>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="11">
              <Accordion.Header>
                String.prototype.localeCompare()
              </Accordion.Header>
              <Accordion.Body>
                The localeCompare() method returns a number indicating whether a
                reference string comes before, or after, or is the same as the
                given string in sort order. In implementations with{" "}
                <a href="">Intl.Collator API</a> support, this method simply
                calls Intl.Collator.{" "}
                <a
                  target="_blank"
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare"
                  rel="noreferrer"
                >
                  MDN Link
                </a>
              </Accordion.Body>
              <Accordion.Body>
                Example:
                <br />
                <code>
                  const a = 'réservé'; with accents, lowercase
                  <br />
                  const b = 'RESERVE'; no accents, uppercase
                  <br />
                  console.log(a.localeCompare(b));
                  <br />
                  expected output: 1
                  <br />
                  console.log(a.localeCompare(b, 'en',{" "}
                  {"{ sensitivity: 'base' }"}));
                  <br />
                  expected output: 0
                </code>
              </Accordion.Body>
            </Accordion.Item>
          </Col>
        </Row>
      </Accordion>
    </Container>
  );
};

export default StringMethods;
