/** @constructor */
ScalaJS.c.scala_collection_immutable_LongMap$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_immutable_LongMap$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_immutable_LongMap$.prototype.constructor = ScalaJS.c.scala_collection_immutable_LongMap$;
ScalaJS.c.scala_collection_immutable_LongMap$.prototype.canBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return new ScalaJS.c.scala_collection_immutable_LongMap$$anon$1().init___()
});
ScalaJS.c.scala_collection_immutable_LongMap$.prototype.empty__Lscala_collection_immutable_LongMap = (function() {
  return ScalaJS.modules.scala_collection_immutable_LongMap$Nil()
});
ScalaJS.c.scala_collection_immutable_LongMap$.prototype.singleton__J__O__Lscala_collection_immutable_LongMap = (function(key, value) {
  return new ScalaJS.c.scala_collection_immutable_LongMap$Tip().init___J__O(key, value)
});
ScalaJS.c.scala_collection_immutable_LongMap$.prototype.apply__Lscala_collection_Seq__Lscala_collection_immutable_LongMap = (function(elems) {
  return ScalaJS.as.scala_collection_immutable_LongMap(elems.foldLeft__O__Lscala_Function2__O(this.empty__Lscala_collection_immutable_LongMap(), new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function() {
    return (function(x, y) {
      return x.updated__J__O__Lscala_collection_immutable_LongMap(y.$$und1$mcJ$sp__J(), y.$$und2__O())
    })
  })())))
});
ScalaJS.c.scala_collection_immutable_LongMap$.prototype.apply__Lscala_collection_Seq__ = (function(elems) {
  return this.apply__Lscala_collection_Seq__Lscala_collection_immutable_LongMap(elems)
});
ScalaJS.c.scala_collection_immutable_LongMap$.prototype.singleton__J__O__ = (function(key, value) {
  return this.singleton__J__O__Lscala_collection_immutable_LongMap(key, value)
});
ScalaJS.c.scala_collection_immutable_LongMap$.prototype.empty__ = (function() {
  return this.empty__Lscala_collection_immutable_LongMap()
});
ScalaJS.c.scala_collection_immutable_LongMap$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_LongMap$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_LongMap$.prototype = ScalaJS.c.scala_collection_immutable_LongMap$.prototype;
ScalaJS.is.scala_collection_immutable_LongMap$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_LongMap$)))
});
ScalaJS.as.scala_collection_immutable_LongMap$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_LongMap$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.LongMap")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_LongMap$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_LongMap$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_LongMap$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_LongMap$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.LongMap;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_LongMap$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_LongMap$: 0
}, false, "scala.collection.immutable.LongMap$", ScalaJS.data.java_lang_Object, {
  scala_collection_immutable_LongMap$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_LongMap$.prototype.$classData = ScalaJS.data.scala_collection_immutable_LongMap$;
ScalaJS.moduleInstances.scala_collection_immutable_LongMap = undefined;
ScalaJS.modules.scala_collection_immutable_LongMap = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_LongMap)) {
    ScalaJS.moduleInstances.scala_collection_immutable_LongMap = new ScalaJS.c.scala_collection_immutable_LongMap$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_LongMap
});
//@ sourceMappingURL=LongMap$.js.map
