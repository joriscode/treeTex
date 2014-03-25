/** @constructor */
ScalaJS.c.scala_collection_immutable_IntMap$Bin$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_immutable_IntMap$Bin$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_immutable_IntMap$Bin$.prototype.constructor = ScalaJS.c.scala_collection_immutable_IntMap$Bin$;
ScalaJS.c.scala_collection_immutable_IntMap$Bin$.prototype.toString__T = (function() {
  return "Bin"
});
ScalaJS.c.scala_collection_immutable_IntMap$Bin$.prototype.apply__I__I__Lscala_collection_immutable_IntMap__Lscala_collection_immutable_IntMap__Lscala_collection_immutable_IntMap$Bin = (function(prefix, mask, left, right) {
  return new ScalaJS.c.scala_collection_immutable_IntMap$Bin().init___I__I__Lscala_collection_immutable_IntMap__Lscala_collection_immutable_IntMap(prefix, mask, left, right)
});
ScalaJS.c.scala_collection_immutable_IntMap$Bin$.prototype.unapply__Lscala_collection_immutable_IntMap$Bin__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple4().init___O__O__O__O(ScalaJS.bI(x$0.prefix__I()), ScalaJS.bI(x$0.mask__I()), x$0.left__Lscala_collection_immutable_IntMap(), x$0.right__Lscala_collection_immutable_IntMap()))
  }
});
ScalaJS.c.scala_collection_immutable_IntMap$Bin$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_collection_immutable_IntMap$Bin()
});
ScalaJS.c.scala_collection_immutable_IntMap$Bin$.prototype.unapply__Lscala_collection_immutable_IntMap$Bin__ = (function(x$0) {
  return this.unapply__Lscala_collection_immutable_IntMap$Bin__Lscala_Option(x$0)
});
ScalaJS.c.scala_collection_immutable_IntMap$Bin$.prototype.apply__I__I__Lscala_collection_immutable_IntMap__Lscala_collection_immutable_IntMap__ = (function(prefix, mask, left, right) {
  return this.apply__I__I__Lscala_collection_immutable_IntMap__Lscala_collection_immutable_IntMap__Lscala_collection_immutable_IntMap$Bin(prefix, mask, left, right)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_IntMap$Bin$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_IntMap$Bin$.prototype = ScalaJS.c.scala_collection_immutable_IntMap$Bin$.prototype;
ScalaJS.is.scala_collection_immutable_IntMap$Bin$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_IntMap$Bin$)))
});
ScalaJS.as.scala_collection_immutable_IntMap$Bin$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_IntMap$Bin$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.IntMap$Bin")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_IntMap$Bin$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_IntMap$Bin$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_IntMap$Bin$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_IntMap$Bin$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.IntMap$Bin;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_IntMap$Bin$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_IntMap$Bin$: 0
}, false, "scala.collection.immutable.IntMap$Bin$", ScalaJS.data.java_lang_Object, {
  scala_collection_immutable_IntMap$Bin$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_IntMap$Bin$.prototype.$classData = ScalaJS.data.scala_collection_immutable_IntMap$Bin$;
ScalaJS.moduleInstances.scala_collection_immutable_IntMap$Bin = undefined;
ScalaJS.modules.scala_collection_immutable_IntMap$Bin = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_IntMap$Bin)) {
    ScalaJS.moduleInstances.scala_collection_immutable_IntMap$Bin = new ScalaJS.c.scala_collection_immutable_IntMap$Bin$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_IntMap$Bin
});
//@ sourceMappingURL=IntMap$Bin$.js.map
