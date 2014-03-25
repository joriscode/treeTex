/** @constructor */
ScalaJS.c.scala_io_Source$RelaxedPositioner$ = (function() {
  ScalaJS.c.scala_io_Source$Positioner.call(this)
});
ScalaJS.c.scala_io_Source$RelaxedPositioner$.prototype = new ScalaJS.inheritable.scala_io_Source$Positioner();
ScalaJS.c.scala_io_Source$RelaxedPositioner$.prototype.constructor = ScalaJS.c.scala_io_Source$RelaxedPositioner$;
ScalaJS.c.scala_io_Source$RelaxedPositioner$.prototype.init___Lscala_io_Source = (function($$outer) {
  ScalaJS.c.scala_io_Source$Positioner.prototype.init___Lscala_io_Source__Lscala_io_Position.call(this, $$outer, $$outer.RelaxedPosition__Lscala_io_Source$RelaxedPosition$());
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_io_Source$RelaxedPositioner$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_io_Source$RelaxedPositioner$.prototype = ScalaJS.c.scala_io_Source$RelaxedPositioner$.prototype;
ScalaJS.is.scala_io_Source$RelaxedPositioner$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_io_Source$RelaxedPositioner$)))
});
ScalaJS.as.scala_io_Source$RelaxedPositioner$ = (function(obj) {
  if ((ScalaJS.is.scala_io_Source$RelaxedPositioner$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.io.Source$RelaxedPositioner")
  }
});
ScalaJS.isArrayOf.scala_io_Source$RelaxedPositioner$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_io_Source$RelaxedPositioner$)))
});
ScalaJS.asArrayOf.scala_io_Source$RelaxedPositioner$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_io_Source$RelaxedPositioner$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.io.Source$RelaxedPositioner;", depth)
  }
});
ScalaJS.data.scala_io_Source$RelaxedPositioner$ = new ScalaJS.ClassTypeData({
  scala_io_Source$RelaxedPositioner$: 0
}, false, "scala.io.Source$RelaxedPositioner$", ScalaJS.data.scala_io_Source$Positioner, {
  scala_io_Source$RelaxedPositioner$: 1,
  scala_io_Source$Positioner: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_io_Source$RelaxedPositioner$.prototype.$classData = ScalaJS.data.scala_io_Source$RelaxedPositioner$;
//@ sourceMappingURL=Source$RelaxedPositioner$.js.map
