/** @constructor */
ScalaJS.c.scala_collection_mutable_LinkedEntry = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.key$1 = null;
  this.value$1 = null;
  this.earlier$1 = null;
  this.later$1 = null;
  this.next$1 = null
});
ScalaJS.c.scala_collection_mutable_LinkedEntry.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_mutable_LinkedEntry.prototype.constructor = ScalaJS.c.scala_collection_mutable_LinkedEntry;
ScalaJS.c.scala_collection_mutable_LinkedEntry.prototype.next__O = (function() {
  return this.next$1
});
ScalaJS.c.scala_collection_mutable_LinkedEntry.prototype.next$und$eq__O__V = (function(x$1) {
  this.next$1 = x$1
});
ScalaJS.c.scala_collection_mutable_LinkedEntry.prototype.key__O = (function() {
  return this.key$1
});
ScalaJS.c.scala_collection_mutable_LinkedEntry.prototype.value__O = (function() {
  return this.value$1
});
ScalaJS.c.scala_collection_mutable_LinkedEntry.prototype.value$und$eq__O__V = (function(x$1) {
  this.value$1 = x$1
});
ScalaJS.c.scala_collection_mutable_LinkedEntry.prototype.earlier__Lscala_collection_mutable_LinkedEntry = (function() {
  return this.earlier$1
});
ScalaJS.c.scala_collection_mutable_LinkedEntry.prototype.earlier$und$eq__Lscala_collection_mutable_LinkedEntry__V = (function(x$1) {
  this.earlier$1 = x$1
});
ScalaJS.c.scala_collection_mutable_LinkedEntry.prototype.later__Lscala_collection_mutable_LinkedEntry = (function() {
  return this.later$1
});
ScalaJS.c.scala_collection_mutable_LinkedEntry.prototype.later$und$eq__Lscala_collection_mutable_LinkedEntry__V = (function(x$1) {
  this.later$1 = x$1
});
ScalaJS.c.scala_collection_mutable_LinkedEntry.prototype.init___O__O = (function(key, value) {
  this.key$1 = key;
  this.value$1 = value;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_mutable_HashEntry$class__$init$__Lscala_collection_mutable_HashEntry__V(this);
  this.earlier$1 = null;
  this.later$1 = null;
  return this
});
ScalaJS.c.scala_collection_mutable_LinkedEntry.prototype.next$und$eq__O__ = (function(x$1) {
  return ScalaJS.bV(this.next$und$eq__O__V(x$1))
});
ScalaJS.c.scala_collection_mutable_LinkedEntry.prototype.next__ = (function() {
  return this.next__O()
});
ScalaJS.c.scala_collection_mutable_LinkedEntry.prototype.later$und$eq__Lscala_collection_mutable_LinkedEntry__ = (function(x$1$2) {
  return ScalaJS.bV(this.later$und$eq__Lscala_collection_mutable_LinkedEntry__V(x$1$2))
});
ScalaJS.c.scala_collection_mutable_LinkedEntry.prototype.later__ = (function() {
  return this.later__Lscala_collection_mutable_LinkedEntry()
});
ScalaJS.c.scala_collection_mutable_LinkedEntry.prototype.earlier$und$eq__Lscala_collection_mutable_LinkedEntry__ = (function(x$1$3) {
  return ScalaJS.bV(this.earlier$und$eq__Lscala_collection_mutable_LinkedEntry__V(x$1$3))
});
ScalaJS.c.scala_collection_mutable_LinkedEntry.prototype.earlier__ = (function() {
  return this.earlier__Lscala_collection_mutable_LinkedEntry()
});
ScalaJS.c.scala_collection_mutable_LinkedEntry.prototype.value$und$eq__O__ = (function(x$1$4) {
  return ScalaJS.bV(this.value$und$eq__O__V(x$1$4))
});
ScalaJS.c.scala_collection_mutable_LinkedEntry.prototype.value__ = (function() {
  return this.value__O()
});
ScalaJS.c.scala_collection_mutable_LinkedEntry.prototype.key__ = (function() {
  return this.key__O()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_LinkedEntry = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_LinkedEntry.prototype = ScalaJS.c.scala_collection_mutable_LinkedEntry.prototype;
ScalaJS.is.scala_collection_mutable_LinkedEntry = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_LinkedEntry)))
});
ScalaJS.as.scala_collection_mutable_LinkedEntry = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_LinkedEntry(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.LinkedEntry")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_LinkedEntry = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_LinkedEntry)))
});
ScalaJS.asArrayOf.scala_collection_mutable_LinkedEntry = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_LinkedEntry(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.LinkedEntry;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_LinkedEntry = new ScalaJS.ClassTypeData({
  scala_collection_mutable_LinkedEntry: 0
}, false, "scala.collection.mutable.LinkedEntry", ScalaJS.data.java_lang_Object, {
  scala_collection_mutable_LinkedEntry: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_mutable_HashEntry: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_LinkedEntry.prototype.$classData = ScalaJS.data.scala_collection_mutable_LinkedEntry;
//@ sourceMappingURL=LinkedEntry.js.map
