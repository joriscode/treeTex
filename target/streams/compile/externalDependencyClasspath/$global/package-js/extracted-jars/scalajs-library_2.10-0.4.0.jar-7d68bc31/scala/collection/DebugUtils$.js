/** @constructor */
ScalaJS.c.scala_collection_DebugUtils$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_DebugUtils$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_DebugUtils$.prototype.constructor = ScalaJS.c.scala_collection_DebugUtils$;
ScalaJS.c.scala_collection_DebugUtils$.prototype.unsupported__T__Lscala_Nothing = (function(msg) {
  throw new ScalaJS.c.java_lang_UnsupportedOperationException().init___T(msg)
});
ScalaJS.c.scala_collection_DebugUtils$.prototype.noSuchElement__T__Lscala_Nothing = (function(msg) {
  throw new ScalaJS.c.java_util_NoSuchElementException().init___T(msg)
});
ScalaJS.c.scala_collection_DebugUtils$.prototype.indexOutOfBounds__I__Lscala_Nothing = (function(index) {
  throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(index)))
});
ScalaJS.c.scala_collection_DebugUtils$.prototype.illegalArgument__T__Lscala_Nothing = (function(msg) {
  throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T(msg)
});
ScalaJS.c.scala_collection_DebugUtils$.prototype.buildString__Lscala_Function1__T = (function(closure) {
  var output = new ScalaJS.c.scala_runtime_ObjectRef().init___O("");
  closure.apply__O__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(output$1) {
    return (function(x$1) {
      output$1.elem$1 = (("" + ScalaJS.as.java_lang_String(output$1.elem$1)) + ScalaJS.modules.scala_runtime_StringAdd().$$plus$extension__O__T__T(ScalaJS.modules.scala_Predef().any2stringadd__O__O(x$1), "\n"));
      return ScalaJS.bV(undefined)
    })
  })(output)));
  return ScalaJS.as.java_lang_String(output.elem$1)
});
ScalaJS.c.scala_collection_DebugUtils$.prototype.arrayString__O__I__I__T = (function(array, from, until) {
  return ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.modules.scala_Predef().genericArrayOps__O__Lscala_collection_mutable_ArrayOps(ScalaJS.modules.scala_Predef().genericArrayOps__O__Lscala_collection_mutable_ArrayOps(array).slice__I__I__O(from, until)).map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x0$1) {
      var x1 = x0$1;
      if (ScalaJS.anyRefEqEq(null, x1)) {
        return "n/a"
      };
      return ("" + x1)
    })
  })()), ScalaJS.modules.scala_Array().canBuildFrom__Lscala_reflect_ClassTag__Lscala_collection_generic_CanBuildFrom(ScalaJS.modules.scala_reflect_ClassTag().apply__Ljava_lang_Class__Lscala_reflect_ClassTag(ScalaJS.data.java_lang_String.getClassOf()))), 1)).mkString__T__T(" | ")
});
ScalaJS.c.scala_collection_DebugUtils$.prototype.arrayString__O__I__I__ = (function(array, from, until) {
  return this.arrayString__O__I__I__T(array, from, until)
});
ScalaJS.c.scala_collection_DebugUtils$.prototype.buildString__Lscala_Function1__ = (function(closure) {
  return this.buildString__Lscala_Function1__T(closure)
});
ScalaJS.c.scala_collection_DebugUtils$.prototype.illegalArgument__T__ = (function(msg) {
  return this.illegalArgument__T__Lscala_Nothing(msg)
});
ScalaJS.c.scala_collection_DebugUtils$.prototype.indexOutOfBounds__I__ = (function(index) {
  return this.indexOutOfBounds__I__Lscala_Nothing(index)
});
ScalaJS.c.scala_collection_DebugUtils$.prototype.noSuchElement__T__ = (function(msg$2) {
  return this.noSuchElement__T__Lscala_Nothing(msg$2)
});
ScalaJS.c.scala_collection_DebugUtils$.prototype.unsupported__T__ = (function(msg$3) {
  return this.unsupported__T__Lscala_Nothing(msg$3)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_DebugUtils$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_DebugUtils$.prototype = ScalaJS.c.scala_collection_DebugUtils$.prototype;
ScalaJS.is.scala_collection_DebugUtils$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_DebugUtils$)))
});
ScalaJS.as.scala_collection_DebugUtils$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_DebugUtils$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.DebugUtils")
  }
});
ScalaJS.isArrayOf.scala_collection_DebugUtils$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_DebugUtils$)))
});
ScalaJS.asArrayOf.scala_collection_DebugUtils$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_DebugUtils$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.DebugUtils;", depth)
  }
});
ScalaJS.data.scala_collection_DebugUtils$ = new ScalaJS.ClassTypeData({
  scala_collection_DebugUtils$: 0
}, false, "scala.collection.DebugUtils$", ScalaJS.data.java_lang_Object, {
  scala_collection_DebugUtils$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_DebugUtils$.prototype.$classData = ScalaJS.data.scala_collection_DebugUtils$;
ScalaJS.moduleInstances.scala_collection_DebugUtils = undefined;
ScalaJS.modules.scala_collection_DebugUtils = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_DebugUtils)) {
    ScalaJS.moduleInstances.scala_collection_DebugUtils = new ScalaJS.c.scala_collection_DebugUtils$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_DebugUtils
});
//@ sourceMappingURL=DebugUtils$.js.map
