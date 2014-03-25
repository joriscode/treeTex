/** @constructor */
ScalaJS.c.scala_collection_mutable_ObservableBuffer$$anon$3 = (function() {
  ScalaJS.c.scala_collection_script_Include.call(this);
  this.$$outer$2 = null
});
ScalaJS.c.scala_collection_mutable_ObservableBuffer$$anon$3.prototype = new ScalaJS.inheritable.scala_collection_script_Include();
ScalaJS.c.scala_collection_mutable_ObservableBuffer$$anon$3.prototype.constructor = ScalaJS.c.scala_collection_mutable_ObservableBuffer$$anon$3;
ScalaJS.c.scala_collection_mutable_ObservableBuffer$$anon$3.prototype.undo__V = (function() {
  this.$$outer$2.trimStart__I__V(1)
});
ScalaJS.c.scala_collection_mutable_ObservableBuffer$$anon$3.prototype.init___Lscala_collection_mutable_ObservableBuffer__O = (function($$outer, element$2) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  ScalaJS.c.scala_collection_script_Include.prototype.init___Lscala_collection_script_Location__O.call(this, ScalaJS.modules.scala_collection_script_Start(), element$2);
  return this
});
ScalaJS.c.scala_collection_mutable_ObservableBuffer$$anon$3.prototype.undo__ = (function() {
  return ScalaJS.bV(this.undo__V())
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_ObservableBuffer$$anon$3 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_ObservableBuffer$$anon$3.prototype = ScalaJS.c.scala_collection_mutable_ObservableBuffer$$anon$3.prototype;
ScalaJS.is.scala_collection_mutable_ObservableBuffer$$anon$3 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_ObservableBuffer$$anon$3)))
});
ScalaJS.as.scala_collection_mutable_ObservableBuffer$$anon$3 = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_ObservableBuffer$$anon$3(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.ObservableBuffer$$anon$3")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_ObservableBuffer$$anon$3 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_ObservableBuffer$$anon$3)))
});
ScalaJS.asArrayOf.scala_collection_mutable_ObservableBuffer$$anon$3 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_ObservableBuffer$$anon$3(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.ObservableBuffer$$anon$3;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_ObservableBuffer$$anon$3 = new ScalaJS.ClassTypeData({
  scala_collection_mutable_ObservableBuffer$$anon$3: 0
}, false, "scala.collection.mutable.ObservableBuffer$$anon$3", ScalaJS.data.scala_collection_script_Include, {
  scala_collection_mutable_ObservableBuffer$$anon$3: 1,
  scala_collection_mutable_Undoable: 1,
  scala_collection_script_Include: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_collection_script_Message: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_ObservableBuffer$$anon$3.prototype.$classData = ScalaJS.data.scala_collection_mutable_ObservableBuffer$$anon$3;
//@ sourceMappingURL=ObservableBuffer$$anon$3.js.map
