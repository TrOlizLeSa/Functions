import _ from 'lodash';

// BEGIN
import { capitalize } from 'lodash/string';
function normalizeLesson(lesson) {
  lesson.name = capitalize(lesson.name);
  lesson.description = lesson.description.toLowerCase();
}
export default normalizeLesson;
  // END