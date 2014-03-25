/** @constructor */
ScalaJS.c.scala_collection_immutable_TrieIterator$DupIterator = (function() {
  ScalaJS.c.scala_collection_immutable_TrieIterator.call(this);
  this.initDepth$3 = 0;
  this.initArrayStack$3 = null;
  this.initPosStack$3 = null;
  this.initArrayD$3 = null;
  this.initPosD$3 = 0;
  this.initSubIter$3 = null;
  this.$$outer$3 = null
});
ScalaJS.c.scala_collection_immutable_TrieIterator$DupIterator.prototype = new ScalaJS.inheritable.scala_collection_immutable_TrieIterator();
ScalaJS.c.scala_collection_immutable_TrieIterator$DupIterator.prototype.constructor = ScalaJS.c.scala_collection_immutable_TrieIterator$DupIterator;
ScalaJS.c.scala_collection_immutable_TrieIterator$DupIterator.prototype.initDepth__I = (function() {
  return this.initDepth$3
});
ScalaJS.c.scala_collection_immutable_TrieIterator$DupIterator.prototype.initArrayStack__AALscala_collection_immutable_Iterable = (function() {
  return this.initArrayStack$3
});
ScalaJS.c.scala_collection_immutable_TrieIterator$DupIterator.prototype.initPosStack__AI = (function() {
  return this.initPosStack$3
});
ScalaJS.c.scala_collection_immutable_TrieIterator$DupIterator.prototype.initArrayD__ALscala_collection_immutable_Iterable = (function() {
  return this.initArrayD$3
});
ScalaJS.c.scala_collection_immutable_TrieIterator$DupIterator.prototype.initPosD__I = (function() {
  return this.initPosD$3
});
ScalaJS.c.scala_collection_immutable_TrieIterator$DupIterator.prototype.initSubIter__Lscala_collection_Iterator = (function() {
  return this.initSubIter$3
});
ScalaJS.c.scala_collection_immutable_TrieIterator$DupIterator.prototype.getElem__O__O = (function(x) {
  return this.$$outer$3.getElem__O__O(x)
});
ScalaJS.c.scala_collection_immutable_TrieIterator$DupIterator.prototype.init___Lscala_collection_immutable_TrieIterator__ALscala_collection_immutable_Iterable = (function($$outer, xs) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$3 = $$outer
  };
  var initDepth = $$outer.scala$collection$immutable$TrieIterator$$depth$f;
  this.initDepth$3 = initDepth;
  var initArrayStack = $$outer.scala$collection$immutable$TrieIterator$$arrayStack$f;
  this.initArrayStack$3 = initArrayStack;
  var initPosStack = $$outer.scala$collection$immutable$TrieIterator$$posStack$f;
  this.initPosStack$3 = initPosStack;
  var initArrayD = $$outer.scala$collection$immutable$TrieIterator$$arrayD$f;
  this.initArrayD$3 = initArrayD;
  var initPosD = $$outer.scala$collection$immutable$TrieIterator$$posD$f;
  this.initPosD$3 = initPosD;
  var initSubIter = $$outer.scala$collection$immutable$TrieIterator$$subIter$f;
  this.initSubIter$3 = initSubIter;
  ScalaJS.c.scala_collection_immutable_TrieIterator.prototype.init___ALscala_collection_immutable_Iterable.call(this, xs);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_TrieIterator$DupIterator = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_TrieIterator$DupIterator.prototype = ScalaJS.c.scala_collection_immutable_TrieIterator$DupIterator.prototype;
ScalaJS.is.scala_collection_immutable_TrieIterator$DupIterator = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_TrieIterator$DupIterator)))
});
ScalaJS.as.scala_collection_immutable_TrieIterator$DupIterator = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_TrieIterator$DupIterator(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.TrieIterator$DupIterator")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_TrieIterator$DupIterator = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_TrieIterator$DupIterator)))
});
ScalaJS.asArrayOf.scala_collection_immutable_TrieIterator$DupIterator = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_TrieIterator$DupIterator(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.TrieIterator$DupIterator;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_TrieIterator$DupIterator = new ScalaJS.ClassTypeData({
  scala_collection_immutable_TrieIterator$DupIterator: 0
}, false, "scala.collection.immutable.TrieIterator$DupIterator", ScalaJS.data.scala_collection_immutable_TrieIterator, {
  scala_collection_immutable_TrieIterator$DupIterator: 1,
  scala_collection_immutable_TrieIterator: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_TrieIterator$DupIterator.prototype.$classData = ScalaJS.data.scala_collection_immutable_TrieIterator$DupIterator;
//@ sourceMappingURL=TrieIterator$DupIterator.js.map
