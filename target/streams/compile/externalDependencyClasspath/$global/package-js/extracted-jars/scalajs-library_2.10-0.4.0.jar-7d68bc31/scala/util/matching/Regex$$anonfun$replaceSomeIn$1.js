/** @constructor */
ScalaJS.c.scala_util_matching_Regex$$anonfun$replaceSomeIn$1 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this);
  this.replacer$2$2 = null;
  this.it$2$f = null
});
ScalaJS.c.scala_util_matching_Regex$$anonfun$replaceSomeIn$1.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.scala_util_matching_Regex$$anonfun$replaceSomeIn$1.prototype.constructor = ScalaJS.c.scala_util_matching_Regex$$anonfun$replaceSomeIn$1;
ScalaJS.c.scala_util_matching_Regex$$anonfun$replaceSomeIn$1.prototype.apply__Lscala_util_matching_Regex$Match__V = (function(matchdata) {
  ScalaJS.as.scala_Option(this.replacer$2$2.apply__O__O(matchdata)).foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(replacement) {
      return ScalaJS.as.scala_util_matching_Regex$Replacement(arg$outer.it$2$f).replace__T__Ljava_util_regex_Matcher(replacement)
    })
  })(this)))
});
ScalaJS.c.scala_util_matching_Regex$$anonfun$replaceSomeIn$1.prototype.apply__O__O = (function(v1) {
  this.apply__Lscala_util_matching_Regex$Match__V(ScalaJS.as.scala_util_matching_Regex$Match(v1));
  return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
});
ScalaJS.c.scala_util_matching_Regex$$anonfun$replaceSomeIn$1.prototype.init___Lscala_util_matching_Regex__Lscala_Function1__Lscala_collection_AbstractIterator = (function($$outer, replacer$2, it$2) {
  this.replacer$2$2 = replacer$2;
  this.it$2$f = it$2;
  ScalaJS.c.scala_runtime_AbstractFunction1.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_util_matching_Regex$$anonfun$replaceSomeIn$1.prototype.apply__Lscala_util_matching_Regex$Match__ = (function(matchdata) {
  return ScalaJS.bV(this.apply__Lscala_util_matching_Regex$Match__V(matchdata))
});
/** @constructor */
ScalaJS.inheritable.scala_util_matching_Regex$$anonfun$replaceSomeIn$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_matching_Regex$$anonfun$replaceSomeIn$1.prototype = ScalaJS.c.scala_util_matching_Regex$$anonfun$replaceSomeIn$1.prototype;
ScalaJS.is.scala_util_matching_Regex$$anonfun$replaceSomeIn$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_matching_Regex$$anonfun$replaceSomeIn$1)))
});
ScalaJS.as.scala_util_matching_Regex$$anonfun$replaceSomeIn$1 = (function(obj) {
  if ((ScalaJS.is.scala_util_matching_Regex$$anonfun$replaceSomeIn$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.matching.Regex$$anonfun$replaceSomeIn$1")
  }
});
ScalaJS.isArrayOf.scala_util_matching_Regex$$anonfun$replaceSomeIn$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_matching_Regex$$anonfun$replaceSomeIn$1)))
});
ScalaJS.asArrayOf.scala_util_matching_Regex$$anonfun$replaceSomeIn$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_matching_Regex$$anonfun$replaceSomeIn$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.matching.Regex$$anonfun$replaceSomeIn$1;", depth)
  }
});
ScalaJS.data.scala_util_matching_Regex$$anonfun$replaceSomeIn$1 = new ScalaJS.ClassTypeData({
  scala_util_matching_Regex$$anonfun$replaceSomeIn$1: 0
}, false, "scala.util.matching.Regex$$anonfun$replaceSomeIn$1", ScalaJS.data.scala_runtime_AbstractFunction1, {
  scala_util_matching_Regex$$anonfun$replaceSomeIn$1: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_matching_Regex$$anonfun$replaceSomeIn$1.prototype.$classData = ScalaJS.data.scala_util_matching_Regex$$anonfun$replaceSomeIn$1;
//@ sourceMappingURL=Regex$$anonfun$replaceSomeIn$1.js.map
