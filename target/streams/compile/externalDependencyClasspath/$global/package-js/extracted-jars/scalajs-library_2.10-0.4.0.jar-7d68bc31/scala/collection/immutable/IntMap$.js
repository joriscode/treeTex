/** @constructor */
ScalaJS.c.scala_collection_immutable_IntMap$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_immutable_IntMap$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_immutable_IntMap$.prototype.constructor = ScalaJS.c.scala_collection_immutable_IntMap$;
ScalaJS.c.scala_collection_immutable_IntMap$.prototype.canBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return new ScalaJS.c.scala_collection_immutable_IntMap$$anon$1().init___()
});
ScalaJS.c.scala_collection_immutable_IntMap$.prototype.empty__Lscala_collection_immutable_IntMap = (function() {
  return ScalaJS.modules.scala_collection_immutable_IntMap$Nil()
});
ScalaJS.c.scala_collection_immutable_IntMap$.prototype.singleton__I__O__Lscala_collection_immutable_IntMap = (function(key, value) {
  return new ScalaJS.c.scala_collection_immutable_IntMap$Tip().init___I__O(key, value)
});
ScalaJS.c.scala_collection_immutable_IntMap$.prototype.apply__Lscala_collection_Seq__Lscala_collection_immutable_IntMap = (function(elems) {
  return ScalaJS.as.scala_collection_immutable_IntMap(elems.foldLeft__O__Lscala_Function2__O(this.empty__Lscala_collection_immutable_IntMap(), new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function() {
    return (function(x, y) {
      return x.updated__I__O__Lscala_collection_immutable_IntMap(y.$$und1$mcI$sp__I(), y.$$und2__O())
    })
  })())))
});
ScalaJS.c.scala_collection_immutable_IntMap$.prototype.apply__Lscala_collection_Seq__ = (function(elems) {
  return this.apply__Lscala_collection_Seq__Lscala_collection_immutable_IntMap(elems)
});
ScalaJS.c.scala_collection_immutable_IntMap$.prototype.singleton__I__O__ = (function(key, value) {
  return this.singleton__I__O__Lscala_collection_immutable_IntMap(key, value)
});
ScalaJS.c.scala_collection_immutable_IntMap$.prototype.empty__ = (function() {
  return this.empty__Lscala_collection_immutable_IntMap()
});
ScalaJS.c.scala_collection_immutable_IntMap$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_IntMap$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_IntMap$.prototype = ScalaJS.c.scala_collection_immutable_IntMap$.prototype;
ScalaJS.is.scala_collection_immutable_IntMap$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_IntMap$)))
});
ScalaJS.as.scala_collection_immutable_IntMap$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_IntMap$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.IntMap")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_IntMap$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_IntMap$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_IntMap$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_IntMap$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.IntMap;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_IntMap$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_IntMap$: 0
}, false, "scala.collection.immutable.IntMap$", ScalaJS.data.java_lang_Object, {
  scala_collection_immutable_IntMap$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_IntMap$.prototype.$classData = ScalaJS.data.scala_collection_immutable_IntMap$;
ScalaJS.moduleInstances.scala_collection_immutable_IntMap = undefined;
ScalaJS.modules.scala_collection_immutable_IntMap = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_IntMap)) {
    ScalaJS.moduleInstances.scala_collection_immutable_IntMap = new ScalaJS.c.scala_collection_immutable_IntMap$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_IntMap
});
//@ sourceMappingURL=IntMap$.js.map
