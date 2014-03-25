/** @constructor */
ScalaJS.c.scala_io_Source$NoPositioner$ = (function() {
  ScalaJS.c.scala_io_Source$Positioner.call(this)
});
ScalaJS.c.scala_io_Source$NoPositioner$.prototype = new ScalaJS.inheritable.scala_io_Source$Positioner();
ScalaJS.c.scala_io_Source$NoPositioner$.prototype.constructor = ScalaJS.c.scala_io_Source$NoPositioner$;
ScalaJS.c.scala_io_Source$NoPositioner$.prototype.next__C = (function() {
  return ScalaJS.uC(this.scala$io$Source$NoPositioner$$$outer__Lscala_io_Source().iter__Lscala_collection_Iterator().next__O())
});
ScalaJS.c.scala_io_Source$NoPositioner$.prototype.scala$io$Source$NoPositioner$$$outer__Lscala_io_Source = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_io_Source$NoPositioner$.prototype.init___Lscala_io_Source = (function($$outer) {
  ScalaJS.c.scala_io_Source$Positioner.prototype.init___Lscala_io_Source__Lscala_io_Position.call(this, $$outer, ScalaJS.modules.scala_io_Position());
  return this
});
ScalaJS.c.scala_io_Source$NoPositioner$.prototype.scala$io$Source$NoPositioner$$$outer__ = (function() {
  return this.scala$io$Source$NoPositioner$$$outer__Lscala_io_Source()
});
/** @constructor */
ScalaJS.inheritable.scala_io_Source$NoPositioner$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_io_Source$NoPositioner$.prototype = ScalaJS.c.scala_io_Source$NoPositioner$.prototype;
ScalaJS.is.scala_io_Source$NoPositioner$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_io_Source$NoPositioner$)))
});
ScalaJS.as.scala_io_Source$NoPositioner$ = (function(obj) {
  if ((ScalaJS.is.scala_io_Source$NoPositioner$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.io.Source$NoPositioner")
  }
});
ScalaJS.isArrayOf.scala_io_Source$NoPositioner$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_io_Source$NoPositioner$)))
});
ScalaJS.asArrayOf.scala_io_Source$NoPositioner$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_io_Source$NoPositioner$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.io.Source$NoPositioner;", depth)
  }
});
ScalaJS.data.scala_io_Source$NoPositioner$ = new ScalaJS.ClassTypeData({
  scala_io_Source$NoPositioner$: 0
}, false, "scala.io.Source$NoPositioner$", ScalaJS.data.scala_io_Source$Positioner, {
  scala_io_Source$NoPositioner$: 1,
  scala_io_Source$Positioner: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_io_Source$NoPositioner$.prototype.$classData = ScalaJS.data.scala_io_Source$NoPositioner$;
//@ sourceMappingURL=Source$NoPositioner$.js.map
