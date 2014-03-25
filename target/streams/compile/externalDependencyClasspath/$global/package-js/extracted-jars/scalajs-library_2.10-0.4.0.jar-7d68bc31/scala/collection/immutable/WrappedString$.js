/** @constructor */
ScalaJS.c.scala_collection_immutable_WrappedString$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_immutable_WrappedString$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_immutable_WrappedString$.prototype.constructor = ScalaJS.c.scala_collection_immutable_WrappedString$;
ScalaJS.c.scala_collection_immutable_WrappedString$.prototype.canBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return new ScalaJS.c.scala_collection_immutable_WrappedString$$anon$1().init___()
});
ScalaJS.c.scala_collection_immutable_WrappedString$.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return ScalaJS.modules.scala_collection_mutable_StringBuilder().newBuilder__Lscala_collection_mutable_StringBuilder().mapResult__Lscala_Function1__Lscala_collection_mutable_Builder(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x) {
      return new ScalaJS.c.scala_collection_immutable_WrappedString().init___T(x)
    })
  })()))
});
ScalaJS.c.scala_collection_immutable_WrappedString$.prototype.newBuilder__ = (function() {
  return this.newBuilder__Lscala_collection_mutable_Builder()
});
ScalaJS.c.scala_collection_immutable_WrappedString$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_WrappedString$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_WrappedString$.prototype = ScalaJS.c.scala_collection_immutable_WrappedString$.prototype;
ScalaJS.is.scala_collection_immutable_WrappedString$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_WrappedString$)))
});
ScalaJS.as.scala_collection_immutable_WrappedString$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_WrappedString$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.WrappedString")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_WrappedString$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_WrappedString$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_WrappedString$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_WrappedString$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.WrappedString;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_WrappedString$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_WrappedString$: 0
}, false, "scala.collection.immutable.WrappedString$", ScalaJS.data.java_lang_Object, {
  scala_collection_immutable_WrappedString$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_WrappedString$.prototype.$classData = ScalaJS.data.scala_collection_immutable_WrappedString$;
ScalaJS.moduleInstances.scala_collection_immutable_WrappedString = undefined;
ScalaJS.modules.scala_collection_immutable_WrappedString = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_WrappedString)) {
    ScalaJS.moduleInstances.scala_collection_immutable_WrappedString = new ScalaJS.c.scala_collection_immutable_WrappedString$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_WrappedString
});
//@ sourceMappingURL=WrappedString$.js.map
