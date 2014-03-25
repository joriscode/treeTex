/** @constructor */
ScalaJS.c.scala_io_Source$Positioner = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.encoder$1 = null;
  this.ch$1 = 0;
  this.pos$1 = 0;
  this.cline$1 = 0;
  this.ccol$1 = 0;
  this.tabinc$1 = 0;
  this.$$outer$f = null
});
ScalaJS.c.scala_io_Source$Positioner.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_io_Source$Positioner.prototype.constructor = ScalaJS.c.scala_io_Source$Positioner;
ScalaJS.c.scala_io_Source$Positioner.prototype.ch__C = (function() {
  return this.ch$1
});
ScalaJS.c.scala_io_Source$Positioner.prototype.ch$und$eq__C__V = (function(x$1) {
  this.ch$1 = x$1
});
ScalaJS.c.scala_io_Source$Positioner.prototype.pos__I = (function() {
  return this.pos$1
});
ScalaJS.c.scala_io_Source$Positioner.prototype.pos$und$eq__I__V = (function(x$1) {
  this.pos$1 = x$1
});
ScalaJS.c.scala_io_Source$Positioner.prototype.cline__I = (function() {
  return this.cline$1
});
ScalaJS.c.scala_io_Source$Positioner.prototype.cline$und$eq__I__V = (function(x$1) {
  this.cline$1 = x$1
});
ScalaJS.c.scala_io_Source$Positioner.prototype.ccol__I = (function() {
  return this.ccol$1
});
ScalaJS.c.scala_io_Source$Positioner.prototype.ccol$und$eq__I__V = (function(x$1) {
  this.ccol$1 = x$1
});
ScalaJS.c.scala_io_Source$Positioner.prototype.tabinc__I = (function() {
  return this.tabinc$1
});
ScalaJS.c.scala_io_Source$Positioner.prototype.tabinc$und$eq__I__V = (function(x$1) {
  this.tabinc$1 = x$1
});
ScalaJS.c.scala_io_Source$Positioner.prototype.next__C = (function() {
  this.ch$und$eq__C__V(ScalaJS.uC(this.scala$io$Source$Positioner$$$outer__Lscala_io_Source().iter__Lscala_collection_Iterator().next__O()));
  this.pos$und$eq__I__V(this.encoder$1.encode__I__I__I(this.cline__I(), this.ccol__I()));
  var x1 = this.ch__C();
  switch (x1) {
    case 10:
      {
        this.ccol$und$eq__I__V(1);
        this.cline$und$eq__I__V((this.cline__I() + 1));
        break
      };
    case 9:
      {
        this.ccol$und$eq__I__V((this.ccol__I() + this.tabinc__I()));
        break
      };
    default:
      this.ccol$und$eq__I__V((this.ccol__I() + 1));
  };
  return this.ch__C()
});
ScalaJS.c.scala_io_Source$Positioner.prototype.scala$io$Source$Positioner$$$outer__Lscala_io_Source = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_io_Source$Positioner.prototype.init___Lscala_io_Source__Lscala_io_Position = (function($$outer, encoder) {
  this.encoder$1 = encoder;
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  this.pos$1 = 0;
  this.cline$1 = 1;
  this.ccol$1 = 1;
  this.tabinc$1 = 4;
  return this
});
ScalaJS.c.scala_io_Source$Positioner.prototype.init___Lscala_io_Source = (function($$outer) {
  ScalaJS.c.scala_io_Source$Positioner.prototype.init___Lscala_io_Source__Lscala_io_Position.call(this, $$outer, $$outer.RelaxedPosition__Lscala_io_Source$RelaxedPosition$());
  return this
});
ScalaJS.c.scala_io_Source$Positioner.prototype.scala$io$Source$Positioner$$$outer__ = (function() {
  return this.scala$io$Source$Positioner$$$outer__Lscala_io_Source()
});
ScalaJS.c.scala_io_Source$Positioner.prototype.next__ = (function() {
  return ScalaJS.bC(this.next__C())
});
ScalaJS.c.scala_io_Source$Positioner.prototype.tabinc$und$eq__I__ = (function(x$1) {
  return ScalaJS.bV(this.tabinc$und$eq__I__V(x$1))
});
ScalaJS.c.scala_io_Source$Positioner.prototype.tabinc__ = (function() {
  return ScalaJS.bI(this.tabinc__I())
});
ScalaJS.c.scala_io_Source$Positioner.prototype.ccol$und$eq__I__ = (function(x$1$2) {
  return ScalaJS.bV(this.ccol$und$eq__I__V(x$1$2))
});
ScalaJS.c.scala_io_Source$Positioner.prototype.ccol__ = (function() {
  return ScalaJS.bI(this.ccol__I())
});
ScalaJS.c.scala_io_Source$Positioner.prototype.cline$und$eq__I__ = (function(x$1$3) {
  return ScalaJS.bV(this.cline$und$eq__I__V(x$1$3))
});
ScalaJS.c.scala_io_Source$Positioner.prototype.cline__ = (function() {
  return ScalaJS.bI(this.cline__I())
});
ScalaJS.c.scala_io_Source$Positioner.prototype.pos$und$eq__I__ = (function(x$1$4) {
  return ScalaJS.bV(this.pos$und$eq__I__V(x$1$4))
});
ScalaJS.c.scala_io_Source$Positioner.prototype.pos__ = (function() {
  return ScalaJS.bI(this.pos__I())
});
ScalaJS.c.scala_io_Source$Positioner.prototype.ch$und$eq__C__ = (function(x$1$5) {
  return ScalaJS.bV(this.ch$und$eq__C__V(x$1$5))
});
ScalaJS.c.scala_io_Source$Positioner.prototype.ch__ = (function() {
  return ScalaJS.bC(this.ch__C())
});
/** @constructor */
ScalaJS.inheritable.scala_io_Source$Positioner = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_io_Source$Positioner.prototype = ScalaJS.c.scala_io_Source$Positioner.prototype;
ScalaJS.is.scala_io_Source$Positioner = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_io_Source$Positioner)))
});
ScalaJS.as.scala_io_Source$Positioner = (function(obj) {
  if ((ScalaJS.is.scala_io_Source$Positioner(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.io.Source$Positioner")
  }
});
ScalaJS.isArrayOf.scala_io_Source$Positioner = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_io_Source$Positioner)))
});
ScalaJS.asArrayOf.scala_io_Source$Positioner = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_io_Source$Positioner(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.io.Source$Positioner;", depth)
  }
});
ScalaJS.data.scala_io_Source$Positioner = new ScalaJS.ClassTypeData({
  scala_io_Source$Positioner: 0
}, false, "scala.io.Source$Positioner", ScalaJS.data.java_lang_Object, {
  scala_io_Source$Positioner: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_io_Source$Positioner.prototype.$classData = ScalaJS.data.scala_io_Source$Positioner;
//@ sourceMappingURL=Source$Positioner.js.map
