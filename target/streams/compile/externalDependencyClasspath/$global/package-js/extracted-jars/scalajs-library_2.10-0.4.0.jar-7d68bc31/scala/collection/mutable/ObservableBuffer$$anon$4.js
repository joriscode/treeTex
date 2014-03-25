/** @constructor */
ScalaJS.c.scala_collection_mutable_ObservableBuffer$$anon$4 = (function() {
  ScalaJS.c.scala_collection_script_Update.call(this);
  this.$$outer$2 = null;
  this.oldelement$1$2 = null;
  this.n$1$2 = 0
});
ScalaJS.c.scala_collection_mutable_ObservableBuffer$$anon$4.prototype = new ScalaJS.inheritable.scala_collection_script_Update();
ScalaJS.c.scala_collection_mutable_ObservableBuffer$$anon$4.prototype.constructor = ScalaJS.c.scala_collection_mutable_ObservableBuffer$$anon$4;
ScalaJS.c.scala_collection_mutable_ObservableBuffer$$anon$4.prototype.undo__V = (function() {
  this.$$outer$2.update__I__O__V(this.n$1$2, this.oldelement$1$2)
});
ScalaJS.c.scala_collection_mutable_ObservableBuffer$$anon$4.prototype.init___Lscala_collection_mutable_ObservableBuffer__O__I__O = (function($$outer, oldelement$1, n$1, newelement$1) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  this.oldelement$1$2 = oldelement$1;
  this.n$1$2 = n$1;
  ScalaJS.c.scala_collection_script_Update.prototype.init___Lscala_collection_script_Location__O.call(this, new ScalaJS.c.scala_collection_script_Index().init___I(n$1), newelement$1);
  return this
});
ScalaJS.c.scala_collection_mutable_ObservableBuffer$$anon$4.prototype.undo__ = (function() {
  return ScalaJS.bV(this.undo__V())
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_ObservableBuffer$$anon$4 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_ObservableBuffer$$anon$4.prototype = ScalaJS.c.scala_collection_mutable_ObservableBuffer$$anon$4.prototype;
ScalaJS.is.scala_collection_mutable_ObservableBuffer$$anon$4 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_ObservableBuffer$$anon$4)))
});
ScalaJS.as.scala_collection_mutable_ObservableBuffer$$anon$4 = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_ObservableBuffer$$anon$4(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.ObservableBuffer$$anon$4")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_ObservableBuffer$$anon$4 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_ObservableBuffer$$anon$4)))
});
ScalaJS.asArrayOf.scala_collection_mutable_ObservableBuffer$$anon$4 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_ObservableBuffer$$anon$4(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.ObservableBuffer$$anon$4;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_ObservableBuffer$$anon$4 = new ScalaJS.ClassTypeData({
  scala_collection_mutable_ObservableBuffer$$anon$4: 0
}, false, "scala.collection.mutable.ObservableBuffer$$anon$4", ScalaJS.data.scala_collection_script_Update, {
  scala_collection_mutable_ObservableBuffer$$anon$4: 1,
  scala_collection_mutable_Undoable: 1,
  scala_collection_script_Update: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_collection_script_Message: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_ObservableBuffer$$anon$4.prototype.$classData = ScalaJS.data.scala_collection_mutable_ObservableBuffer$$anon$4;
//@ sourceMappingURL=ObservableBuffer$$anon$4.js.map
