import DS from 'ember-data';
import DictionaryModel from 'ember-dictionary/models/dictionary-model';

export default DictionaryModel.extend({
  dictionary: DS.attr('dictionary')
});