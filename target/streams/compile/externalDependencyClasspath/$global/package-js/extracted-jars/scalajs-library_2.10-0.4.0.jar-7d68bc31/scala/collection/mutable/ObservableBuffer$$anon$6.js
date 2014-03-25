/** @constructor */
ScalaJS.c.scala_collection_mutable_ObservableBuffer$$anon$6 = (function() {
  ScalaJS.c.scala_collection_script_Reset.call(this)
});
ScalaJS.c.scala_collection_mutable_ObservableBuffer$$anon$6.prototype = new ScalaJS.inheritable.scala_collection_script_Reset();
ScalaJS.c.scala_collection_mutable_ObservableBuffer$$anon$6.prototype.constructor = ScalaJS.c.scala_collection_mutable_ObservableBuffer$$anon$6;
ScalaJS.c.scala_collection_mutable_ObservableBuffer$$anon$6.prototype.undo__V = (function() {
  throw new ScalaJS.c.java_lang_UnsupportedOperationException().init___T("cannot undo")
});
ScalaJS.c.scala_collection_mutable_ObservableBuffer$$anon$6.prototype.init___Lscala_collection_mutable_ObservableBuffer = (function($$outer) {
  ScalaJS.c.scala_collection_script_Reset.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_mutable_ObservableBuffer$$anon$6.prototype.undo__ = (function() {
  return ScalaJS.bV(this.undo__V())
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_ObservableBuffer$$anon$6 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_ObservableBuffer$$anon$6.prototype = ScalaJS.c.scala_collection_mutable_ObservableBuffer$$anon$6.prototype;
ScalaJS.is.scala_collection_mutable_ObservableBuffer$$anon$6 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_ObservableBuffer$$anon$6)))
});
ScalaJS.as.scala_collection_mutable_ObservableBuffer$$anon$6 = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_ObservableBuffer$$anon$6(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.ObservableBuffer$$anon$6")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_ObservableBuffer$$anon$6 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_ObservableBuffer$$anon$6)))
});
ScalaJS.asArrayOf.scala_collection_mutable_ObservableBuffer$$anon$6 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_ObservableBuffer$$anon$6(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.ObservableBuffer$$anon$6;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_ObservableBuffer$$anon$6 = new ScalaJS.ClassTypeData({
  scala_collection_mutable_ObservableBuffer$$anon$6: 0
}, false, "scala.collection.mutable.ObservableBuffer$$anon$6", ScalaJS.data.scala_collection_script_Reset, {
  scala_collection_mutable_ObservableBuffer$$anon$6: 1,
  scala_collection_mutable_Undoable: 1,
  scala_collection_script_Reset: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_collection_script_Message: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_ObservableBuffer$$anon$6.prototype.$classData = ScalaJS.data.scala_collection_mutable_ObservableBuffer$$anon$6;
//@ sourceMappingURL=ObservableBuffer$$anon$6.js.map
