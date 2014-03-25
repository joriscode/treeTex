/** @constructor */
ScalaJS.c.scala_Predef$Triple$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_Predef$Triple$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Predef$Triple$.prototype.constructor = ScalaJS.c.scala_Predef$Triple$;
ScalaJS.c.scala_Predef$Triple$.prototype.apply__O__O__O__Lscala_Tuple3 = (function(x$3, y$2, z) {
  return new ScalaJS.c.scala_Tuple3().init___O__O__O(x$3, y$2, z)
});
ScalaJS.c.scala_Predef$Triple$.prototype.unapply__Lscala_Tuple3__Lscala_Option = (function(x) {
  return new ScalaJS.c.scala_Some().init___O(x)
});
ScalaJS.c.scala_Predef$Triple$.prototype.unapply__Lscala_Tuple3__ = (function(x) {
  return this.unapply__Lscala_Tuple3__Lscala_Option(x)
});
ScalaJS.c.scala_Predef$Triple$.prototype.apply__O__O__O__ = (function(x$2, y, z) {
  return this.apply__O__O__O__Lscala_Tuple3(x$2, y, z)
});
/** @constructor */
ScalaJS.inheritable.scala_Predef$Triple$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Predef$Triple$.prototype = ScalaJS.c.scala_Predef$Triple$.prototype;
ScalaJS.is.scala_Predef$Triple$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Predef$Triple$)))
});
ScalaJS.as.scala_Predef$Triple$ = (function(obj) {
  if ((ScalaJS.is.scala_Predef$Triple$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Predef$Triple")
  }
});
ScalaJS.isArrayOf.scala_Predef$Triple$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Predef$Triple$)))
});
ScalaJS.asArrayOf.scala_Predef$Triple$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Predef$Triple$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Predef$Triple;", depth)
  }
});
ScalaJS.data.scala_Predef$Triple$ = new ScalaJS.ClassTypeData({
  scala_Predef$Triple$: 0
}, false, "scala.Predef$Triple$", ScalaJS.data.java_lang_Object, {
  scala_Predef$Triple$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Predef$Triple$.prototype.$classData = ScalaJS.data.scala_Predef$Triple$;
ScalaJS.moduleInstances.scala_Predef$Triple = undefined;
ScalaJS.modules.scala_Predef$Triple = (function() {
  if ((!ScalaJS.moduleInstances.scala_Predef$Triple)) {
    ScalaJS.moduleInstances.scala_Predef$Triple = new ScalaJS.c.scala_Predef$Triple$().init___()
  };
  return ScalaJS.moduleInstances.scala_Predef$Triple
});
//@ sourceMappingURL=Predef$Triple$.js.map
