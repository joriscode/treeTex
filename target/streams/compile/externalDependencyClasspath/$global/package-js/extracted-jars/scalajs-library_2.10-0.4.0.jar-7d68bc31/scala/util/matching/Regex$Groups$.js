/** @constructor */
ScalaJS.c.scala_util_matching_Regex$Groups$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_util_matching_Regex$Groups$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_matching_Regex$Groups$.prototype.constructor = ScalaJS.c.scala_util_matching_Regex$Groups$;
ScalaJS.c.scala_util_matching_Regex$Groups$.prototype.unapplySeq__Lscala_util_matching_Regex$Match__Lscala_Option = (function(m$2) {
  if ((m$2.groupCount__I() > 0)) {
    return new ScalaJS.c.scala_Some().init___O(ScalaJS.modules.scala_runtime_RichInt().to$extension0__I__I__Lscala_collection_immutable_Range$Inclusive(ScalaJS.modules.scala_Predef().intWrapper__I__I(1), m$2.groupCount__I()).map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(m$2) {
      return (function(i) {
        i = ScalaJS.uI(i);
        return m$2.group__I__T(i)
      })
    })(m$2)), ScalaJS.modules.scala_collection_immutable_IndexedSeq().canBuildFrom__Lscala_collection_generic_CanBuildFrom()))
  } else {
    return ScalaJS.modules.scala_None()
  }
});
ScalaJS.c.scala_util_matching_Regex$Groups$.prototype.unapplySeq__Lscala_util_matching_Regex$Match__ = (function(m) {
  return this.unapplySeq__Lscala_util_matching_Regex$Match__Lscala_Option(m)
});
/** @constructor */
ScalaJS.inheritable.scala_util_matching_Regex$Groups$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_matching_Regex$Groups$.prototype = ScalaJS.c.scala_util_matching_Regex$Groups$.prototype;
ScalaJS.is.scala_util_matching_Regex$Groups$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_matching_Regex$Groups$)))
});
ScalaJS.as.scala_util_matching_Regex$Groups$ = (function(obj) {
  if ((ScalaJS.is.scala_util_matching_Regex$Groups$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.matching.Regex$Groups")
  }
});
ScalaJS.isArrayOf.scala_util_matching_Regex$Groups$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_matching_Regex$Groups$)))
});
ScalaJS.asArrayOf.scala_util_matching_Regex$Groups$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_matching_Regex$Groups$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.matching.Regex$Groups;", depth)
  }
});
ScalaJS.data.scala_util_matching_Regex$Groups$ = new ScalaJS.ClassTypeData({
  scala_util_matching_Regex$Groups$: 0
}, false, "scala.util.matching.Regex$Groups$", ScalaJS.data.java_lang_Object, {
  scala_util_matching_Regex$Groups$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_matching_Regex$Groups$.prototype.$classData = ScalaJS.data.scala_util_matching_Regex$Groups$;
ScalaJS.moduleInstances.scala_util_matching_Regex$Groups = undefined;
ScalaJS.modules.scala_util_matching_Regex$Groups = (function() {
  if ((!ScalaJS.moduleInstances.scala_util_matching_Regex$Groups)) {
    ScalaJS.moduleInstances.scala_util_matching_Regex$Groups = new ScalaJS.c.scala_util_matching_Regex$Groups$().init___()
  };
  return ScalaJS.moduleInstances.scala_util_matching_Regex$Groups
});
//@ sourceMappingURL=Regex$Groups$.js.map
