/** @constructor */
ScalaJS.c.scala_collection_mutable_ObservableMap$$anon$2 = (function() {
  ScalaJS.c.scala_collection_script_Update.call(this);
  this.$$outer$2 = null;
  this.key$1$2 = null;
  this.old$1$2 = null
});
ScalaJS.c.scala_collection_mutable_ObservableMap$$anon$2.prototype = new ScalaJS.inheritable.scala_collection_script_Update();
ScalaJS.c.scala_collection_mutable_ObservableMap$$anon$2.prototype.constructor = ScalaJS.c.scala_collection_mutable_ObservableMap$$anon$2;
ScalaJS.c.scala_collection_mutable_ObservableMap$$anon$2.prototype.undo__V = (function() {
  this.$$outer$2.$$plus$eq__Lscala_Tuple2__Lscala_collection_mutable_ObservableMap(new ScalaJS.c.scala_Tuple2().init___O__O(this.key$1$2, this.old$1$2))
});
ScalaJS.c.scala_collection_mutable_ObservableMap$$anon$2.prototype.init___Lscala_collection_mutable_ObservableMap__O__O__O = (function($$outer, key$1, value$1, old$1) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  this.key$1$2 = key$1;
  this.old$1$2 = old$1;
  ScalaJS.c.scala_collection_script_Update.prototype.init___O.call(this, new ScalaJS.c.scala_Tuple2().init___O__O(key$1, value$1));
  return this
});
ScalaJS.c.scala_collection_mutable_ObservableMap$$anon$2.prototype.undo__ = (function() {
  return ScalaJS.bV(this.undo__V())
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_ObservableMap$$anon$2 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_ObservableMap$$anon$2.prototype = ScalaJS.c.scala_collection_mutable_ObservableMap$$anon$2.prototype;
ScalaJS.is.scala_collection_mutable_ObservableMap$$anon$2 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_ObservableMap$$anon$2)))
});
ScalaJS.as.scala_collection_mutable_ObservableMap$$anon$2 = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_ObservableMap$$anon$2(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.ObservableMap$$anon$2")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_ObservableMap$$anon$2 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_ObservableMap$$anon$2)))
});
ScalaJS.asArrayOf.scala_collection_mutable_ObservableMap$$anon$2 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_ObservableMap$$anon$2(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.ObservableMap$$anon$2;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_ObservableMap$$anon$2 = new ScalaJS.ClassTypeData({
  scala_collection_mutable_ObservableMap$$anon$2: 0
}, false, "scala.collection.mutable.ObservableMap$$anon$2", ScalaJS.data.scala_collection_script_Update, {
  scala_collection_mutable_ObservableMap$$anon$2: 1,
  scala_collection_mutable_Undoable: 1,
  scala_collection_script_Update: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_collection_script_Message: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_ObservableMap$$anon$2.prototype.$classData = ScalaJS.data.scala_collection_mutable_ObservableMap$$anon$2;
//@ sourceMappingURL=ObservableMap$$anon$2.js.map
