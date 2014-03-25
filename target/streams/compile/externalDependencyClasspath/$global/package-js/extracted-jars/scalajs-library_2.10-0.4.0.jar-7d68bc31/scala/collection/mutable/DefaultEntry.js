/** @constructor */
ScalaJS.c.scala_collection_mutable_DefaultEntry = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.key$1 = null;
  this.value$1 = null;
  this.next$1 = null
});
ScalaJS.c.scala_collection_mutable_DefaultEntry.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_mutable_DefaultEntry.prototype.constructor = ScalaJS.c.scala_collection_mutable_DefaultEntry;
ScalaJS.c.scala_collection_mutable_DefaultEntry.prototype.next__O = (function() {
  return this.next$1
});
ScalaJS.c.scala_collection_mutable_DefaultEntry.prototype.next$und$eq__O__V = (function(x$1) {
  this.next$1 = x$1
});
ScalaJS.c.scala_collection_mutable_DefaultEntry.prototype.key__O = (function() {
  return this.key$1
});
ScalaJS.c.scala_collection_mutable_DefaultEntry.prototype.value__O = (function() {
  return this.value$1
});
ScalaJS.c.scala_collection_mutable_DefaultEntry.prototype.value$und$eq__O__V = (function(x$1) {
  this.value$1 = x$1
});
ScalaJS.c.scala_collection_mutable_DefaultEntry.prototype.toString__T = (function() {
  return this.chainString__T()
});
ScalaJS.c.scala_collection_mutable_DefaultEntry.prototype.chainString__T = (function() {
  var jsx$2 = (((("(kv: " + this.key__O()) + ", ") + this.value__O()) + ")");
  if ((!ScalaJS.anyRefEqEq(this.next__O(), null))) {
    var jsx$1 = (" -> " + ScalaJS.as.scala_collection_mutable_DefaultEntry(this.next__O()).toString__T())
  } else {
    var jsx$1 = ""
  };
  return (jsx$2 + jsx$1)
});
ScalaJS.c.scala_collection_mutable_DefaultEntry.prototype.init___O__O = (function(key, value) {
  this.key$1 = key;
  this.value$1 = value;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_mutable_HashEntry$class__$init$__Lscala_collection_mutable_HashEntry__V(this);
  return this
});
ScalaJS.c.scala_collection_mutable_DefaultEntry.prototype.next$und$eq__O__ = (function(x$1) {
  return ScalaJS.bV(this.next$und$eq__O__V(x$1))
});
ScalaJS.c.scala_collection_mutable_DefaultEntry.prototype.next__ = (function() {
  return this.next__O()
});
ScalaJS.c.scala_collection_mutable_DefaultEntry.prototype.chainString__ = (function() {
  return this.chainString__T()
});
ScalaJS.c.scala_collection_mutable_DefaultEntry.prototype.value$und$eq__O__ = (function(x$1$2) {
  return ScalaJS.bV(this.value$und$eq__O__V(x$1$2))
});
ScalaJS.c.scala_collection_mutable_DefaultEntry.prototype.value__ = (function() {
  return this.value__O()
});
ScalaJS.c.scala_collection_mutable_DefaultEntry.prototype.key__ = (function() {
  return this.key__O()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_DefaultEntry = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_DefaultEntry.prototype = ScalaJS.c.scala_collection_mutable_DefaultEntry.prototype;
ScalaJS.is.scala_collection_mutable_DefaultEntry = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_DefaultEntry)))
});
ScalaJS.as.scala_collection_mutable_DefaultEntry = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_DefaultEntry(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.DefaultEntry")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_DefaultEntry = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_DefaultEntry)))
});
ScalaJS.asArrayOf.scala_collection_mutable_DefaultEntry = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_DefaultEntry(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.DefaultEntry;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_DefaultEntry = new ScalaJS.ClassTypeData({
  scala_collection_mutable_DefaultEntry: 0
}, false, "scala.collection.mutable.DefaultEntry", ScalaJS.data.java_lang_Object, {
  scala_collection_mutable_DefaultEntry: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_mutable_HashEntry: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_DefaultEntry.prototype.$classData = ScalaJS.data.scala_collection_mutable_DefaultEntry;
//@ sourceMappingURL=DefaultEntry.js.map
