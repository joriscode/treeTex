/** @constructor */
ScalaJS.c.scala_collection_mutable_OpenHashMap$OpenEntry = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.key$1 = null;
  this.hash$1 = 0;
  this.value$1 = null;
  this.next$1 = null
});
ScalaJS.c.scala_collection_mutable_OpenHashMap$OpenEntry.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_mutable_OpenHashMap$OpenEntry.prototype.constructor = ScalaJS.c.scala_collection_mutable_OpenHashMap$OpenEntry;
ScalaJS.c.scala_collection_mutable_OpenHashMap$OpenEntry.prototype.next__O = (function() {
  return this.next$1
});
ScalaJS.c.scala_collection_mutable_OpenHashMap$OpenEntry.prototype.next$und$eq__O__V = (function(x$1) {
  this.next$1 = x$1
});
ScalaJS.c.scala_collection_mutable_OpenHashMap$OpenEntry.prototype.key__O = (function() {
  return this.key$1
});
ScalaJS.c.scala_collection_mutable_OpenHashMap$OpenEntry.prototype.hash__I = (function() {
  return this.hash$1
});
ScalaJS.c.scala_collection_mutable_OpenHashMap$OpenEntry.prototype.value__Lscala_Option = (function() {
  return this.value$1
});
ScalaJS.c.scala_collection_mutable_OpenHashMap$OpenEntry.prototype.value$und$eq__Lscala_Option__V = (function(x$1) {
  this.value$1 = x$1
});
ScalaJS.c.scala_collection_mutable_OpenHashMap$OpenEntry.prototype.init___O__I__Lscala_Option = (function(key, hash, value) {
  this.key$1 = key;
  this.hash$1 = hash;
  this.value$1 = value;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_mutable_HashEntry$class__$init$__Lscala_collection_mutable_HashEntry__V(this);
  return this
});
ScalaJS.c.scala_collection_mutable_OpenHashMap$OpenEntry.prototype.next$und$eq__O__ = (function(x$1) {
  return ScalaJS.bV(this.next$und$eq__O__V(x$1))
});
ScalaJS.c.scala_collection_mutable_OpenHashMap$OpenEntry.prototype.next__ = (function() {
  return this.next__O()
});
ScalaJS.c.scala_collection_mutable_OpenHashMap$OpenEntry.prototype.value$und$eq__Lscala_Option__ = (function(x$1$2) {
  return ScalaJS.bV(this.value$und$eq__Lscala_Option__V(x$1$2))
});
ScalaJS.c.scala_collection_mutable_OpenHashMap$OpenEntry.prototype.value__ = (function() {
  return this.value__Lscala_Option()
});
ScalaJS.c.scala_collection_mutable_OpenHashMap$OpenEntry.prototype.hash__ = (function() {
  return ScalaJS.bI(this.hash__I())
});
ScalaJS.c.scala_collection_mutable_OpenHashMap$OpenEntry.prototype.key__ = (function() {
  return this.key__O()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_OpenHashMap$OpenEntry = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_OpenHashMap$OpenEntry.prototype = ScalaJS.c.scala_collection_mutable_OpenHashMap$OpenEntry.prototype;
ScalaJS.is.scala_collection_mutable_OpenHashMap$OpenEntry = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_OpenHashMap$OpenEntry)))
});
ScalaJS.as.scala_collection_mutable_OpenHashMap$OpenEntry = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_OpenHashMap$OpenEntry(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.OpenHashMap$OpenEntry")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_OpenHashMap$OpenEntry = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_OpenHashMap$OpenEntry)))
});
ScalaJS.asArrayOf.scala_collection_mutable_OpenHashMap$OpenEntry = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_OpenHashMap$OpenEntry(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.OpenHashMap$OpenEntry;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_OpenHashMap$OpenEntry = new ScalaJS.ClassTypeData({
  scala_collection_mutable_OpenHashMap$OpenEntry: 0
}, false, "scala.collection.mutable.OpenHashMap$OpenEntry", ScalaJS.data.java_lang_Object, {
  scala_collection_mutable_OpenHashMap$OpenEntry: 1,
  scala_collection_mutable_HashEntry: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_OpenHashMap$OpenEntry.prototype.$classData = ScalaJS.data.scala_collection_mutable_OpenHashMap$OpenEntry;
//@ sourceMappingURL=OpenHashMap$OpenEntry.js.map
