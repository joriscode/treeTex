/** @constructor */
ScalaJS.c.scala_collection_mutable_FlatHashTable$Contents = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.loadFactor$1 = 0;
  this.table$1 = null;
  this.tableSize$1 = 0;
  this.threshold$1 = 0;
  this.seedvalue$1 = 0;
  this.sizemap$1 = null
});
ScalaJS.c.scala_collection_mutable_FlatHashTable$Contents.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_mutable_FlatHashTable$Contents.prototype.constructor = ScalaJS.c.scala_collection_mutable_FlatHashTable$Contents;
ScalaJS.c.scala_collection_mutable_FlatHashTable$Contents.prototype.loadFactor__I = (function() {
  return this.loadFactor$1
});
ScalaJS.c.scala_collection_mutable_FlatHashTable$Contents.prototype.table__AO = (function() {
  return this.table$1
});
ScalaJS.c.scala_collection_mutable_FlatHashTable$Contents.prototype.tableSize__I = (function() {
  return this.tableSize$1
});
ScalaJS.c.scala_collection_mutable_FlatHashTable$Contents.prototype.threshold__I = (function() {
  return this.threshold$1
});
ScalaJS.c.scala_collection_mutable_FlatHashTable$Contents.prototype.seedvalue__I = (function() {
  return this.seedvalue$1
});
ScalaJS.c.scala_collection_mutable_FlatHashTable$Contents.prototype.sizemap__AI = (function() {
  return this.sizemap$1
});
ScalaJS.c.scala_collection_mutable_FlatHashTable$Contents.prototype.init___I__AO__I__I__I__AI = (function(loadFactor, table, tableSize, threshold, seedvalue, sizemap) {
  this.loadFactor$1 = loadFactor;
  this.table$1 = table;
  this.tableSize$1 = tableSize;
  this.threshold$1 = threshold;
  this.seedvalue$1 = seedvalue;
  this.sizemap$1 = sizemap;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_mutable_FlatHashTable$Contents.prototype.sizemap__ = (function() {
  return this.sizemap__AI()
});
ScalaJS.c.scala_collection_mutable_FlatHashTable$Contents.prototype.seedvalue__ = (function() {
  return ScalaJS.bI(this.seedvalue__I())
});
ScalaJS.c.scala_collection_mutable_FlatHashTable$Contents.prototype.threshold__ = (function() {
  return ScalaJS.bI(this.threshold__I())
});
ScalaJS.c.scala_collection_mutable_FlatHashTable$Contents.prototype.tableSize__ = (function() {
  return ScalaJS.bI(this.tableSize__I())
});
ScalaJS.c.scala_collection_mutable_FlatHashTable$Contents.prototype.table__ = (function() {
  return this.table__AO()
});
ScalaJS.c.scala_collection_mutable_FlatHashTable$Contents.prototype.loadFactor__ = (function() {
  return ScalaJS.bI(this.loadFactor__I())
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_FlatHashTable$Contents = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_FlatHashTable$Contents.prototype = ScalaJS.c.scala_collection_mutable_FlatHashTable$Contents.prototype;
ScalaJS.is.scala_collection_mutable_FlatHashTable$Contents = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_FlatHashTable$Contents)))
});
ScalaJS.as.scala_collection_mutable_FlatHashTable$Contents = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_FlatHashTable$Contents(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.FlatHashTable$Contents")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_FlatHashTable$Contents = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_FlatHashTable$Contents)))
});
ScalaJS.asArrayOf.scala_collection_mutable_FlatHashTable$Contents = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_FlatHashTable$Contents(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.FlatHashTable$Contents;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_FlatHashTable$Contents = new ScalaJS.ClassTypeData({
  scala_collection_mutable_FlatHashTable$Contents: 0
}, false, "scala.collection.mutable.FlatHashTable$Contents", ScalaJS.data.java_lang_Object, {
  scala_collection_mutable_FlatHashTable$Contents: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_FlatHashTable$Contents.prototype.$classData = ScalaJS.data.scala_collection_mutable_FlatHashTable$Contents;
//@ sourceMappingURL=FlatHashTable$Contents.js.map
