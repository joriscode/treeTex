/** @constructor */
ScalaJS.c.scala_collection_mutable_LinkedHashSet$Entry = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.key$1 = null;
  this.earlier$1 = null;
  this.later$1 = null;
  this.next$1 = null
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet$Entry.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_mutable_LinkedHashSet$Entry.prototype.constructor = ScalaJS.c.scala_collection_mutable_LinkedHashSet$Entry;
ScalaJS.c.scala_collection_mutable_LinkedHashSet$Entry.prototype.next__O = (function() {
  return this.next$1
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet$Entry.prototype.next$und$eq__O__V = (function(x$1) {
  this.next$1 = x$1
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet$Entry.prototype.key__O = (function() {
  return this.key$1
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet$Entry.prototype.earlier__Lscala_collection_mutable_LinkedHashSet$Entry = (function() {
  return this.earlier$1
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet$Entry.prototype.earlier$und$eq__Lscala_collection_mutable_LinkedHashSet$Entry__V = (function(x$1) {
  this.earlier$1 = x$1
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet$Entry.prototype.later__Lscala_collection_mutable_LinkedHashSet$Entry = (function() {
  return this.later$1
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet$Entry.prototype.later$und$eq__Lscala_collection_mutable_LinkedHashSet$Entry__V = (function(x$1) {
  this.later$1 = x$1
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet$Entry.prototype.init___O = (function(key) {
  this.key$1 = key;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_mutable_HashEntry$class__$init$__Lscala_collection_mutable_HashEntry__V(this);
  this.earlier$1 = null;
  this.later$1 = null;
  return this
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet$Entry.prototype.next$und$eq__O__ = (function(x$1) {
  return ScalaJS.bV(this.next$und$eq__O__V(x$1))
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet$Entry.prototype.next__ = (function() {
  return this.next__O()
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet$Entry.prototype.later$und$eq__Lscala_collection_mutable_LinkedHashSet$Entry__ = (function(x$1$2) {
  return ScalaJS.bV(this.later$und$eq__Lscala_collection_mutable_LinkedHashSet$Entry__V(x$1$2))
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet$Entry.prototype.later__ = (function() {
  return this.later__Lscala_collection_mutable_LinkedHashSet$Entry()
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet$Entry.prototype.earlier$und$eq__Lscala_collection_mutable_LinkedHashSet$Entry__ = (function(x$1$3) {
  return ScalaJS.bV(this.earlier$und$eq__Lscala_collection_mutable_LinkedHashSet$Entry__V(x$1$3))
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet$Entry.prototype.earlier__ = (function() {
  return this.earlier__Lscala_collection_mutable_LinkedHashSet$Entry()
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet$Entry.prototype.key__ = (function() {
  return this.key__O()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_LinkedHashSet$Entry = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_LinkedHashSet$Entry.prototype = ScalaJS.c.scala_collection_mutable_LinkedHashSet$Entry.prototype;
ScalaJS.is.scala_collection_mutable_LinkedHashSet$Entry = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_LinkedHashSet$Entry)))
});
ScalaJS.as.scala_collection_mutable_LinkedHashSet$Entry = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_LinkedHashSet$Entry(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.LinkedHashSet$Entry")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_LinkedHashSet$Entry = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_LinkedHashSet$Entry)))
});
ScalaJS.asArrayOf.scala_collection_mutable_LinkedHashSet$Entry = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_LinkedHashSet$Entry(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.LinkedHashSet$Entry;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_LinkedHashSet$Entry = new ScalaJS.ClassTypeData({
  scala_collection_mutable_LinkedHashSet$Entry: 0
}, false, "scala.collection.mutable.LinkedHashSet$Entry", ScalaJS.data.java_lang_Object, {
  scala_collection_mutable_LinkedHashSet$Entry: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_mutable_HashEntry: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet$Entry.prototype.$classData = ScalaJS.data.scala_collection_mutable_LinkedHashSet$Entry;
//@ sourceMappingURL=LinkedHashSet$Entry.js.map
