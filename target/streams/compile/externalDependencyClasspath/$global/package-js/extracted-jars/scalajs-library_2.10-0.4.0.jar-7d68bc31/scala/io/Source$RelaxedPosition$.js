/** @constructor */
ScalaJS.c.scala_io_Source$RelaxedPosition$ = (function() {
  ScalaJS.c.scala_io_Position.call(this)
});
ScalaJS.c.scala_io_Source$RelaxedPosition$.prototype = new ScalaJS.inheritable.scala_io_Position();
ScalaJS.c.scala_io_Source$RelaxedPosition$.prototype.constructor = ScalaJS.c.scala_io_Source$RelaxedPosition$;
ScalaJS.c.scala_io_Source$RelaxedPosition$.prototype.checkInput__I__I__V = (function(line, column) {
  /*<skip>*/
});
ScalaJS.c.scala_io_Source$RelaxedPosition$.prototype.init___Lscala_io_Source = (function($$outer) {
  ScalaJS.c.scala_io_Position.prototype.init___.call(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_io_Source$RelaxedPosition$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_io_Source$RelaxedPosition$.prototype = ScalaJS.c.scala_io_Source$RelaxedPosition$.prototype;
ScalaJS.is.scala_io_Source$RelaxedPosition$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_io_Source$RelaxedPosition$)))
});
ScalaJS.as.scala_io_Source$RelaxedPosition$ = (function(obj) {
  if ((ScalaJS.is.scala_io_Source$RelaxedPosition$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.io.Source$RelaxedPosition")
  }
});
ScalaJS.isArrayOf.scala_io_Source$RelaxedPosition$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_io_Source$RelaxedPosition$)))
});
ScalaJS.asArrayOf.scala_io_Source$RelaxedPosition$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_io_Source$RelaxedPosition$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.io.Source$RelaxedPosition;", depth)
  }
});
ScalaJS.data.scala_io_Source$RelaxedPosition$ = new ScalaJS.ClassTypeData({
  scala_io_Source$RelaxedPosition$: 0
}, false, "scala.io.Source$RelaxedPosition$", ScalaJS.data.scala_io_Position, {
  scala_io_Source$RelaxedPosition$: 1,
  scala_io_Position: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_io_Source$RelaxedPosition$.prototype.$classData = ScalaJS.data.scala_io_Source$RelaxedPosition$;
//@ sourceMappingURL=Source$RelaxedPosition$.js.map
