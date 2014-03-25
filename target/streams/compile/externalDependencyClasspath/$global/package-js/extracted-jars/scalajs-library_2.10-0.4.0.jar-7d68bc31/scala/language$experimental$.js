/** @constructor */
ScalaJS.c.scala_language$experimental$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.macros$1 = null;
  this.bitmap$0$1 = false
});
ScalaJS.c.scala_language$experimental$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_language$experimental$.prototype.constructor = ScalaJS.c.scala_language$experimental$;
ScalaJS.c.scala_language$experimental$.prototype.macros$lzycompute__p1__Lscala_languageFeature$experimental$macros = (function() {
  if ((!this.bitmap$0$1)) {
    this.macros$1 = ScalaJS.modules.scala_languageFeature$experimental$macros();
    this.bitmap$0$1 = true
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.macros$1
});
ScalaJS.c.scala_language$experimental$.prototype.macros__Lscala_languageFeature$experimental$macros = (function() {
  if ((!this.bitmap$0$1)) {
    return this.macros$lzycompute__p1__Lscala_languageFeature$experimental$macros()
  } else {
    return this.macros$1
  }
});
ScalaJS.c.scala_language$experimental$.prototype.macros__ = (function() {
  return this.macros__Lscala_languageFeature$experimental$macros()
});
/** @constructor */
ScalaJS.inheritable.scala_language$experimental$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_language$experimental$.prototype = ScalaJS.c.scala_language$experimental$.prototype;
ScalaJS.is.scala_language$experimental$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_language$experimental$)))
});
ScalaJS.as.scala_language$experimental$ = (function(obj) {
  if ((ScalaJS.is.scala_language$experimental$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.language$experimental")
  }
});
ScalaJS.isArrayOf.scala_language$experimental$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_language$experimental$)))
});
ScalaJS.asArrayOf.scala_language$experimental$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_language$experimental$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.language$experimental;", depth)
  }
});
ScalaJS.data.scala_language$experimental$ = new ScalaJS.ClassTypeData({
  scala_language$experimental$: 0
}, false, "scala.language$experimental$", ScalaJS.data.java_lang_Object, {
  scala_language$experimental$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_language$experimental$.prototype.$classData = ScalaJS.data.scala_language$experimental$;
ScalaJS.moduleInstances.scala_language$experimental = undefined;
ScalaJS.modules.scala_language$experimental = (function() {
  if ((!ScalaJS.moduleInstances.scala_language$experimental)) {
    ScalaJS.moduleInstances.scala_language$experimental = new ScalaJS.c.scala_language$experimental$().init___()
  };
  return ScalaJS.moduleInstances.scala_language$experimental
});
//@ sourceMappingURL=language$experimental$.js.map
