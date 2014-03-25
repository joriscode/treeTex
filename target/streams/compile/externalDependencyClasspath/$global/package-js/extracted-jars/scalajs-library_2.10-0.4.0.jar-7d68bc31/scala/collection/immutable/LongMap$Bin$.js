/** @constructor */
ScalaJS.c.scala_collection_immutable_LongMap$Bin$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_immutable_LongMap$Bin$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_immutable_LongMap$Bin$.prototype.constructor = ScalaJS.c.scala_collection_immutable_LongMap$Bin$;
ScalaJS.c.scala_collection_immutable_LongMap$Bin$.prototype.toString__T = (function() {
  return "Bin"
});
ScalaJS.c.scala_collection_immutable_LongMap$Bin$.prototype.apply__J__J__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap$Bin = (function(prefix, mask, left, right) {
  return new ScalaJS.c.scala_collection_immutable_LongMap$Bin().init___J__J__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap(prefix, mask, left, right)
});
ScalaJS.c.scala_collection_immutable_LongMap$Bin$.prototype.unapply__Lscala_collection_immutable_LongMap$Bin__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple4().init___O__O__O__O(ScalaJS.bJ(x$0.prefix__J()), ScalaJS.bJ(x$0.mask__J()), x$0.left__Lscala_collection_immutable_LongMap(), x$0.right__Lscala_collection_immutable_LongMap()))
  }
});
ScalaJS.c.scala_collection_immutable_LongMap$Bin$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_collection_immutable_LongMap$Bin()
});
ScalaJS.c.scala_collection_immutable_LongMap$Bin$.prototype.unapply__Lscala_collection_immutable_LongMap$Bin__ = (function(x$0) {
  return this.unapply__Lscala_collection_immutable_LongMap$Bin__Lscala_Option(x$0)
});
ScalaJS.c.scala_collection_immutable_LongMap$Bin$.prototype.apply__J__J__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap__ = (function(prefix, mask, left, right) {
  return this.apply__J__J__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap$Bin(prefix, mask, left, right)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_LongMap$Bin$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_LongMap$Bin$.prototype = ScalaJS.c.scala_collection_immutable_LongMap$Bin$.prototype;
ScalaJS.is.scala_collection_immutable_LongMap$Bin$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_LongMap$Bin$)))
});
ScalaJS.as.scala_collection_immutable_LongMap$Bin$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_LongMap$Bin$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.LongMap$Bin")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_LongMap$Bin$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_LongMap$Bin$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_LongMap$Bin$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_LongMap$Bin$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.LongMap$Bin;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_LongMap$Bin$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_LongMap$Bin$: 0
}, false, "scala.collection.immutable.LongMap$Bin$", ScalaJS.data.java_lang_Object, {
  scala_collection_immutable_LongMap$Bin$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_LongMap$Bin$.prototype.$classData = ScalaJS.data.scala_collection_immutable_LongMap$Bin$;
ScalaJS.moduleInstances.scala_collection_immutable_LongMap$Bin = undefined;
ScalaJS.modules.scala_collection_immutable_LongMap$Bin = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_LongMap$Bin)) {
    ScalaJS.moduleInstances.scala_collection_immutable_LongMap$Bin = new ScalaJS.c.scala_collection_immutable_LongMap$Bin$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_LongMap$Bin
});
//@ sourceMappingURL=LongMap$Bin$.js.map
