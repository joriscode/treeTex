/** @constructor */
ScalaJS.c.scala_collection_mutable_ObservableSet$$anon$3 = (function() {
  ScalaJS.c.scala_collection_script_Reset.call(this)
});
ScalaJS.c.scala_collection_mutable_ObservableSet$$anon$3.prototype = new ScalaJS.inheritable.scala_collection_script_Reset();
ScalaJS.c.scala_collection_mutable_ObservableSet$$anon$3.prototype.constructor = ScalaJS.c.scala_collection_mutable_ObservableSet$$anon$3;
ScalaJS.c.scala_collection_mutable_ObservableSet$$anon$3.prototype.undo__V = (function() {
  throw new ScalaJS.c.java_lang_UnsupportedOperationException().init___T("cannot undo")
});
ScalaJS.c.scala_collection_mutable_ObservableSet$$anon$3.prototype.init___Lscala_collection_mutable_ObservableSet = (function($$outer) {
  ScalaJS.c.scala_collection_script_Reset.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_mutable_ObservableSet$$anon$3.prototype.undo__ = (function() {
  return ScalaJS.bV(this.undo__V())
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_ObservableSet$$anon$3 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_ObservableSet$$anon$3.prototype = ScalaJS.c.scala_collection_mutable_ObservableSet$$anon$3.prototype;
ScalaJS.is.scala_collection_mutable_ObservableSet$$anon$3 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_ObservableSet$$anon$3)))
});
ScalaJS.as.scala_collection_mutable_ObservableSet$$anon$3 = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_ObservableSet$$anon$3(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.ObservableSet$$anon$3")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_ObservableSet$$anon$3 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_ObservableSet$$anon$3)))
});
ScalaJS.asArrayOf.scala_collection_mutable_ObservableSet$$anon$3 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_ObservableSet$$anon$3(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.ObservableSet$$anon$3;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_ObservableSet$$anon$3 = new ScalaJS.ClassTypeData({
  scala_collection_mutable_ObservableSet$$anon$3: 0
}, false, "scala.collection.mutable.ObservableSet$$anon$3", ScalaJS.data.scala_collection_script_Reset, {
  scala_collection_mutable_ObservableSet$$anon$3: 1,
  scala_collection_mutable_Undoable: 1,
  scala_collection_script_Reset: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_collection_script_Message: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_ObservableSet$$anon$3.prototype.$classData = ScalaJS.data.scala_collection_mutable_ObservableSet$$anon$3;
//@ sourceMappingURL=ObservableSet$$anon$3.js.map
