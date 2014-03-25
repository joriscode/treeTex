/** @constructor */
ScalaJS.c.scala_collection_mutable_HashTable$Contents = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.loadFactor$1 = 0;
  this.table$1 = null;
  this.tableSize$1 = 0;
  this.threshold$1 = 0;
  this.seedvalue$1 = 0;
  this.sizemap$1 = null
});
ScalaJS.c.scala_collection_mutable_HashTable$Contents.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_mutable_HashTable$Contents.prototype.constructor = ScalaJS.c.scala_collection_mutable_HashTable$Contents;
ScalaJS.c.scala_collection_mutable_HashTable$Contents.prototype.loadFactor__I = (function() {
  return this.loadFactor$1
});
ScalaJS.c.scala_collection_mutable_HashTable$Contents.prototype.table__ALscala_collection_mutable_HashEntry = (function() {
  return this.table$1
});
ScalaJS.c.scala_collection_mutable_HashTable$Contents.prototype.tableSize__I = (function() {
  return this.tableSize$1
});
ScalaJS.c.scala_collection_mutable_HashTable$Contents.prototype.threshold__I = (function() {
  return this.threshold$1
});
ScalaJS.c.scala_collection_mutable_HashTable$Contents.prototype.seedvalue__I = (function() {
  return this.seedvalue$1
});
ScalaJS.c.scala_collection_mutable_HashTable$Contents.prototype.sizemap__AI = (function() {
  return this.sizemap$1
});
ScalaJS.c.scala_collection_mutable_HashTable$Contents.prototype.debugInformation__T = (function() {
  return ScalaJS.modules.scala_collection_DebugUtils().buildString__Lscala_Function1__T(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(append) {
      append.apply__O__O("Hash table contents");
      append.apply__O__O("-------------------");
      append.apply__O__O((("Table: [" + ScalaJS.modules.scala_collection_DebugUtils().arrayString__O__I__I__T(arg$outer.table__ALscala_collection_mutable_HashEntry(), 0, arg$outer.table__ALscala_collection_mutable_HashEntry().underlying.length)) + "]"));
      append.apply__O__O(("Table size: " + ScalaJS.bI(arg$outer.tableSize__I())));
      append.apply__O__O(("Load factor: " + ScalaJS.bI(arg$outer.loadFactor__I())));
      append.apply__O__O(("Seedvalue: " + ScalaJS.bI(arg$outer.seedvalue__I())));
      append.apply__O__O(("Threshold: " + ScalaJS.bI(arg$outer.threshold__I())));
      append.apply__O__O((("Sizemap: [" + ScalaJS.modules.scala_collection_DebugUtils().arrayString__O__I__I__T(arg$outer.sizemap__AI(), 0, arg$outer.sizemap__AI().underlying.length)) + "]"));
      return ScalaJS.bV(undefined)
    })
  })(this)))
});
ScalaJS.c.scala_collection_mutable_HashTable$Contents.prototype.init___I__ALscala_collection_mutable_HashEntry__I__I__I__AI = (function(loadFactor, table, tableSize, threshold, seedvalue, sizemap) {
  this.loadFactor$1 = loadFactor;
  this.table$1 = table;
  this.tableSize$1 = tableSize;
  this.threshold$1 = threshold;
  this.seedvalue$1 = seedvalue;
  this.sizemap$1 = sizemap;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_mutable_HashTable$Contents.prototype.debugInformation__ = (function() {
  return this.debugInformation__T()
});
ScalaJS.c.scala_collection_mutable_HashTable$Contents.prototype.sizemap__ = (function() {
  return this.sizemap__AI()
});
ScalaJS.c.scala_collection_mutable_HashTable$Contents.prototype.seedvalue__ = (function() {
  return ScalaJS.bI(this.seedvalue__I())
});
ScalaJS.c.scala_collection_mutable_HashTable$Contents.prototype.threshold__ = (function() {
  return ScalaJS.bI(this.threshold__I())
});
ScalaJS.c.scala_collection_mutable_HashTable$Contents.prototype.tableSize__ = (function() {
  return ScalaJS.bI(this.tableSize__I())
});
ScalaJS.c.scala_collection_mutable_HashTable$Contents.prototype.table__ = (function() {
  return this.table__ALscala_collection_mutable_HashEntry()
});
ScalaJS.c.scala_collection_mutable_HashTable$Contents.prototype.loadFactor__ = (function() {
  return ScalaJS.bI(this.loadFactor__I())
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_HashTable$Contents = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_HashTable$Contents.prototype = ScalaJS.c.scala_collection_mutable_HashTable$Contents.prototype;
ScalaJS.is.scala_collection_mutable_HashTable$Contents = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_HashTable$Contents)))
});
ScalaJS.as.scala_collection_mutable_HashTable$Contents = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_HashTable$Contents(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.HashTable$Contents")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_HashTable$Contents = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_HashTable$Contents)))
});
ScalaJS.asArrayOf.scala_collection_mutable_HashTable$Contents = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_HashTable$Contents(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.HashTable$Contents;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_HashTable$Contents = new ScalaJS.ClassTypeData({
  scala_collection_mutable_HashTable$Contents: 0
}, false, "scala.collection.mutable.HashTable$Contents", ScalaJS.data.java_lang_Object, {
  scala_collection_mutable_HashTable$Contents: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_HashTable$Contents.prototype.$classData = ScalaJS.data.scala_collection_mutable_HashTable$Contents;
//@ sourceMappingURL=HashTable$Contents.js.map
