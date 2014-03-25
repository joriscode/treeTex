/** @constructor */
ScalaJS.c.scala_collection_mutable_ObservableBuffer$$anon$5 = (function() {
  ScalaJS.c.scala_collection_script_Remove.call(this);
  this.$$outer$2 = null;
  this.oldelement$2$2 = null;
  this.n$2$2 = 0
});
ScalaJS.c.scala_collection_mutable_ObservableBuffer$$anon$5.prototype = new ScalaJS.inheritable.scala_collection_script_Remove();
ScalaJS.c.scala_collection_mutable_ObservableBuffer$$anon$5.prototype.constructor = ScalaJS.c.scala_collection_mutable_ObservableBuffer$$anon$5;
ScalaJS.c.scala_collection_mutable_ObservableBuffer$$anon$5.prototype.undo__V = (function() {
  this.$$outer$2.insert__I__Lscala_collection_Seq__V(this.n$2$2, ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [this.oldelement$2$2])))
});
ScalaJS.c.scala_collection_mutable_ObservableBuffer$$anon$5.prototype.init___Lscala_collection_mutable_ObservableBuffer__O__I = (function($$outer, oldelement$2, n$2) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  this.oldelement$2$2 = oldelement$2;
  this.n$2$2 = n$2;
  ScalaJS.c.scala_collection_script_Remove.prototype.init___Lscala_collection_script_Location__O.call(this, new ScalaJS.c.scala_collection_script_Index().init___I(n$2), oldelement$2);
  return this
});
ScalaJS.c.scala_collection_mutable_ObservableBuffer$$anon$5.prototype.undo__ = (function() {
  return ScalaJS.bV(this.undo__V())
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_ObservableBuffer$$anon$5 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_ObservableBuffer$$anon$5.prototype = ScalaJS.c.scala_collection_mutable_ObservableBuffer$$anon$5.prototype;
ScalaJS.is.scala_collection_mutable_ObservableBuffer$$anon$5 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_ObservableBuffer$$anon$5)))
});
ScalaJS.as.scala_collection_mutable_ObservableBuffer$$anon$5 = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_ObservableBuffer$$anon$5(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.ObservableBuffer$$anon$5")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_ObservableBuffer$$anon$5 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_ObservableBuffer$$anon$5)))
});
ScalaJS.asArrayOf.scala_collection_mutable_ObservableBuffer$$anon$5 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_ObservableBuffer$$anon$5(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.ObservableBuffer$$anon$5;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_ObservableBuffer$$anon$5 = new ScalaJS.ClassTypeData({
  scala_collection_mutable_ObservableBuffer$$anon$5: 0
}, false, "scala.collection.mutable.ObservableBuffer$$anon$5", ScalaJS.data.scala_collection_script_Remove, {
  scala_collection_mutable_ObservableBuffer$$anon$5: 1,
  scala_collection_mutable_Undoable: 1,
  scala_collection_script_Remove: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_collection_script_Message: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_ObservableBuffer$$anon$5.prototype.$classData = ScalaJS.data.scala_collection_mutable_ObservableBuffer$$anon$5;
//@ sourceMappingURL=ObservableBuffer$$anon$5.js.map
