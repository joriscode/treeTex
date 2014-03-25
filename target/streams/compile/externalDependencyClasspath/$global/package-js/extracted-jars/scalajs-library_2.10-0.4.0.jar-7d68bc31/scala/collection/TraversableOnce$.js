/** @constructor */
ScalaJS.c.scala_collection_TraversableOnce$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_TraversableOnce$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_TraversableOnce$.prototype.constructor = ScalaJS.c.scala_collection_TraversableOnce$;
ScalaJS.c.scala_collection_TraversableOnce$.prototype.traversableOnceCanBuildFrom__Lscala_collection_TraversableOnce$OnceCanBuildFrom = (function() {
  return new ScalaJS.c.scala_collection_TraversableOnce$OnceCanBuildFrom().init___()
});
ScalaJS.c.scala_collection_TraversableOnce$.prototype.wrapTraversableOnce__Lscala_collection_TraversableOnce__Lscala_collection_TraversableOnce$MonadOps = (function(trav) {
  return new ScalaJS.c.scala_collection_TraversableOnce$MonadOps().init___Lscala_collection_TraversableOnce(trav)
});
ScalaJS.c.scala_collection_TraversableOnce$.prototype.alternateImplicit__Lscala_collection_TraversableOnce__Lscala_collection_TraversableOnce$ForceImplicitAmbiguity = (function(trav) {
  return new ScalaJS.c.scala_collection_TraversableOnce$ForceImplicitAmbiguity().init___()
});
ScalaJS.c.scala_collection_TraversableOnce$.prototype.flattenTraversableOnce__Lscala_collection_TraversableOnce__Lscala_Function1__Lscala_collection_TraversableOnce$FlattenOps = (function(travs, ev) {
  return new ScalaJS.c.scala_collection_TraversableOnce$FlattenOps().init___Lscala_collection_TraversableOnce(this.MonadOps__Lscala_collection_TraversableOnce__Lscala_collection_TraversableOnce$MonadOps(travs).map__Lscala_Function1__Lscala_collection_TraversableOnce(ev))
});
ScalaJS.c.scala_collection_TraversableOnce$.prototype.OnceCanBuildFrom__Lscala_collection_TraversableOnce$OnceCanBuildFrom = (function() {
  return new ScalaJS.c.scala_collection_TraversableOnce$OnceCanBuildFrom().init___()
});
ScalaJS.c.scala_collection_TraversableOnce$.prototype.MonadOps__Lscala_collection_TraversableOnce__Lscala_collection_TraversableOnce$MonadOps = (function(trav) {
  return new ScalaJS.c.scala_collection_TraversableOnce$MonadOps().init___Lscala_collection_TraversableOnce(trav)
});
ScalaJS.c.scala_collection_TraversableOnce$.prototype.MonadOps__Lscala_collection_TraversableOnce__ = (function(trav) {
  return this.MonadOps__Lscala_collection_TraversableOnce__Lscala_collection_TraversableOnce$MonadOps(trav)
});
ScalaJS.c.scala_collection_TraversableOnce$.prototype.OnceCanBuildFrom__ = (function() {
  return this.OnceCanBuildFrom__Lscala_collection_TraversableOnce$OnceCanBuildFrom()
});
ScalaJS.c.scala_collection_TraversableOnce$.prototype.flattenTraversableOnce__Lscala_collection_TraversableOnce__Lscala_Function1__ = (function(travs, ev) {
  return this.flattenTraversableOnce__Lscala_collection_TraversableOnce__Lscala_Function1__Lscala_collection_TraversableOnce$FlattenOps(travs, ev)
});
ScalaJS.c.scala_collection_TraversableOnce$.prototype.alternateImplicit__Lscala_collection_TraversableOnce__ = (function(trav$2) {
  return this.alternateImplicit__Lscala_collection_TraversableOnce__Lscala_collection_TraversableOnce$ForceImplicitAmbiguity(trav$2)
});
ScalaJS.c.scala_collection_TraversableOnce$.prototype.wrapTraversableOnce__Lscala_collection_TraversableOnce__ = (function(trav$3) {
  return this.wrapTraversableOnce__Lscala_collection_TraversableOnce__Lscala_collection_TraversableOnce$MonadOps(trav$3)
});
ScalaJS.c.scala_collection_TraversableOnce$.prototype.traversableOnceCanBuildFrom__ = (function() {
  return this.traversableOnceCanBuildFrom__Lscala_collection_TraversableOnce$OnceCanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_TraversableOnce$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_TraversableOnce$.prototype = ScalaJS.c.scala_collection_TraversableOnce$.prototype;
ScalaJS.is.scala_collection_TraversableOnce$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_TraversableOnce$)))
});
ScalaJS.as.scala_collection_TraversableOnce$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_TraversableOnce$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.TraversableOnce")
  }
});
ScalaJS.isArrayOf.scala_collection_TraversableOnce$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_TraversableOnce$)))
});
ScalaJS.asArrayOf.scala_collection_TraversableOnce$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_TraversableOnce$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.TraversableOnce;", depth)
  }
});
ScalaJS.data.scala_collection_TraversableOnce$ = new ScalaJS.ClassTypeData({
  scala_collection_TraversableOnce$: 0
}, false, "scala.collection.TraversableOnce$", ScalaJS.data.java_lang_Object, {
  scala_collection_TraversableOnce$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_TraversableOnce$.prototype.$classData = ScalaJS.data.scala_collection_TraversableOnce$;
ScalaJS.moduleInstances.scala_collection_TraversableOnce = undefined;
ScalaJS.modules.scala_collection_TraversableOnce = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_TraversableOnce)) {
    ScalaJS.moduleInstances.scala_collection_TraversableOnce = new ScalaJS.c.scala_collection_TraversableOnce$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_TraversableOnce
});
//@ sourceMappingURL=TraversableOnce$.js.map
