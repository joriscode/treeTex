/** @constructor */
ScalaJS.c.scala_Predef$$eq$colon$eq$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_Predef$$eq$colon$eq$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Predef$$eq$colon$eq$.prototype.constructor = ScalaJS.c.scala_Predef$$eq$colon$eq$;
ScalaJS.c.scala_Predef$$eq$colon$eq$.prototype.tpEquals__Lscala_Predef$$eq$colon$eq = (function() {
  return ScalaJS.modules.scala_Predef().scala$Predef$$singleton$und$eq$colon$eq$f
});
ScalaJS.c.scala_Predef$$eq$colon$eq$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_Predef$$eq$colon$eq()
});
ScalaJS.c.scala_Predef$$eq$colon$eq$.prototype.tpEquals__ = (function() {
  return this.tpEquals__Lscala_Predef$$eq$colon$eq()
});
/** @constructor */
ScalaJS.inheritable.scala_Predef$$eq$colon$eq$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Predef$$eq$colon$eq$.prototype = ScalaJS.c.scala_Predef$$eq$colon$eq$.prototype;
ScalaJS.is.scala_Predef$$eq$colon$eq$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Predef$$eq$colon$eq$)))
});
ScalaJS.as.scala_Predef$$eq$colon$eq$ = (function(obj) {
  if ((ScalaJS.is.scala_Predef$$eq$colon$eq$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Predef$$eq$colon$eq")
  }
});
ScalaJS.isArrayOf.scala_Predef$$eq$colon$eq$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Predef$$eq$colon$eq$)))
});
ScalaJS.asArrayOf.scala_Predef$$eq$colon$eq$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Predef$$eq$colon$eq$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Predef$$eq$colon$eq;", depth)
  }
});
ScalaJS.data.scala_Predef$$eq$colon$eq$ = new ScalaJS.ClassTypeData({
  scala_Predef$$eq$colon$eq$: 0
}, false, "scala.Predef$$eq$colon$eq$", ScalaJS.data.java_lang_Object, {
  scala_Predef$$eq$colon$eq$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Predef$$eq$colon$eq$.prototype.$classData = ScalaJS.data.scala_Predef$$eq$colon$eq$;
ScalaJS.moduleInstances.scala_Predef$$eq$colon$eq = undefined;
ScalaJS.modules.scala_Predef$$eq$colon$eq = (function() {
  if ((!ScalaJS.moduleInstances.scala_Predef$$eq$colon$eq)) {
    ScalaJS.moduleInstances.scala_Predef$$eq$colon$eq = new ScalaJS.c.scala_Predef$$eq$colon$eq$().init___()
  };
  return ScalaJS.moduleInstances.scala_Predef$$eq$colon$eq
});
//@ sourceMappingURL=Predef$$eq$colon$eq$.js.map
