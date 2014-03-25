/** @constructor */
ScalaJS.c.scala_collection_mutable_ObservableMap$$anon$3 = (function() {
  ScalaJS.c.scala_collection_script_Remove.call(this);
  this.$$outer$2 = null;
  this.old$2$2 = null;
  this.key$2$2 = null
});
ScalaJS.c.scala_collection_mutable_ObservableMap$$anon$3.prototype = new ScalaJS.inheritable.scala_collection_script_Remove();
ScalaJS.c.scala_collection_mutable_ObservableMap$$anon$3.prototype.constructor = ScalaJS.c.scala_collection_mutable_ObservableMap$$anon$3;
ScalaJS.c.scala_collection_mutable_ObservableMap$$anon$3.prototype.undo__V = (function() {
  this.$$outer$2.update__O__O__V(this.key$2$2, this.old$2$2)
});
ScalaJS.c.scala_collection_mutable_ObservableMap$$anon$3.prototype.init___Lscala_collection_mutable_ObservableMap__O__O = (function($$outer, old$2, key$2) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  this.old$2$2 = old$2;
  this.key$2$2 = key$2;
  ScalaJS.c.scala_collection_script_Remove.prototype.init___O.call(this, new ScalaJS.c.scala_Tuple2().init___O__O(key$2, old$2));
  return this
});
ScalaJS.c.scala_collection_mutable_ObservableMap$$anon$3.prototype.undo__ = (function() {
  return ScalaJS.bV(this.undo__V())
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_ObservableMap$$anon$3 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_ObservableMap$$anon$3.prototype = ScalaJS.c.scala_collection_mutable_ObservableMap$$anon$3.prototype;
ScalaJS.is.scala_collection_mutable_ObservableMap$$anon$3 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_ObservableMap$$anon$3)))
});
ScalaJS.as.scala_collection_mutable_ObservableMap$$anon$3 = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_ObservableMap$$anon$3(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.ObservableMap$$anon$3")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_ObservableMap$$anon$3 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_ObservableMap$$anon$3)))
});
ScalaJS.asArrayOf.scala_collection_mutable_ObservableMap$$anon$3 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_ObservableMap$$anon$3(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.ObservableMap$$anon$3;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_ObservableMap$$anon$3 = new ScalaJS.ClassTypeData({
  scala_collection_mutable_ObservableMap$$anon$3: 0
}, false, "scala.collection.mutable.ObservableMap$$anon$3", ScalaJS.data.scala_collection_script_Remove, {
  scala_collection_mutable_ObservableMap$$anon$3: 1,
  scala_collection_mutable_Undoable: 1,
  scala_collection_script_Remove: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_collection_script_Message: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_ObservableMap$$anon$3.prototype.$classData = ScalaJS.data.scala_collection_mutable_ObservableMap$$anon$3;
//@ sourceMappingURL=ObservableMap$$anon$3.js.map
