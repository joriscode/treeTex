/** @constructor */
ScalaJS.c.scala_collection_mutable_ObservableSet$$anon$1 = (function() {
  ScalaJS.c.scala_collection_script_Include.call(this);
  this.$$outer$2 = null
});
ScalaJS.c.scala_collection_mutable_ObservableSet$$anon$1.prototype = new ScalaJS.inheritable.scala_collection_script_Include();
ScalaJS.c.scala_collection_mutable_ObservableSet$$anon$1.prototype.constructor = ScalaJS.c.scala_collection_mutable_ObservableSet$$anon$1;
ScalaJS.c.scala_collection_mutable_ObservableSet$$anon$1.prototype.undo__V = (function() {
  this.$$outer$2.$$minus$eq__O__Lscala_collection_mutable_ObservableSet(this.elem__O())
});
ScalaJS.c.scala_collection_mutable_ObservableSet$$anon$1.prototype.init___Lscala_collection_mutable_ObservableSet__O = (function($$outer, elem$1) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  ScalaJS.c.scala_collection_script_Include.prototype.init___O.call(this, elem$1);
  return this
});
ScalaJS.c.scala_collection_mutable_ObservableSet$$anon$1.prototype.undo__ = (function() {
  return ScalaJS.bV(this.undo__V())
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_ObservableSet$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_ObservableSet$$anon$1.prototype = ScalaJS.c.scala_collection_mutable_ObservableSet$$anon$1.prototype;
ScalaJS.is.scala_collection_mutable_ObservableSet$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_ObservableSet$$anon$1)))
});
ScalaJS.as.scala_collection_mutable_ObservableSet$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_ObservableSet$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.ObservableSet$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_ObservableSet$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_ObservableSet$$anon$1)))
});
ScalaJS.asArrayOf.scala_collection_mutable_ObservableSet$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_ObservableSet$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.ObservableSet$$anon$1;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_ObservableSet$$anon$1 = new ScalaJS.ClassTypeData({
  scala_collection_mutable_ObservableSet$$anon$1: 0
}, false, "scala.collection.mutable.ObservableSet$$anon$1", ScalaJS.data.scala_collection_script_Include, {
  scala_collection_mutable_ObservableSet$$anon$1: 1,
  scala_collection_mutable_Undoable: 1,
  scala_collection_script_Include: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_collection_script_Message: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_ObservableSet$$anon$1.prototype.$classData = ScalaJS.data.scala_collection_mutable_ObservableSet$$anon$1;
//@ sourceMappingURL=ObservableSet$$anon$1.js.map
