/** @constructor */
ScalaJS.c.scala_io_Source$LineIterator = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.sb$2 = null;
  this.iter$2 = null;
  this.$$outer$f = null;
  this.bitmap$0$2 = false
});
ScalaJS.c.scala_io_Source$LineIterator.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_io_Source$LineIterator.prototype.constructor = ScalaJS.c.scala_io_Source$LineIterator;
ScalaJS.c.scala_io_Source$LineIterator.prototype.iter$lzycompute__p2__Lscala_collection_BufferedIterator = (function() {
  if ((!this.bitmap$0$2)) {
    this.iter$2 = this.scala$io$Source$LineIterator$$$outer__Lscala_io_Source().iter__Lscala_collection_Iterator().buffered__Lscala_collection_BufferedIterator();
    this.bitmap$0$2 = true
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.iter$2
});
ScalaJS.c.scala_io_Source$LineIterator.prototype.iter__Lscala_collection_BufferedIterator = (function() {
  if ((!this.bitmap$0$2)) {
    return this.iter$lzycompute__p2__Lscala_collection_BufferedIterator()
  } else {
    return this.iter$2
  }
});
ScalaJS.c.scala_io_Source$LineIterator.prototype.isNewline__C__Z = (function(ch) {
  return ((ch === 13) || (ch === 10))
});
ScalaJS.c.scala_io_Source$LineIterator.prototype.getc__Z = (function() {
  if (this.iter__Lscala_collection_BufferedIterator().hasNext__Z()) {
    var ch = ScalaJS.uC(this.iter__Lscala_collection_BufferedIterator().next__O());
    if ((ch === 10)) {
      return false
    } else {
      if ((ch === 13)) {
        if ((this.iter__Lscala_collection_BufferedIterator().hasNext__Z() && (ScalaJS.uC(this.iter__Lscala_collection_BufferedIterator().head__O()) === 10))) {
          this.iter__Lscala_collection_BufferedIterator().next__O()
        } else {
          ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
        };
        return false
      } else {
        this.sb$2.append__C__Lscala_collection_mutable_StringBuilder(ch);
        return true
      }
    }
  } else {
    return false
  }
});
ScalaJS.c.scala_io_Source$LineIterator.prototype.hasNext__Z = (function() {
  return this.iter__Lscala_collection_BufferedIterator().hasNext__Z()
});
ScalaJS.c.scala_io_Source$LineIterator.prototype.next__T = (function() {
  this.sb$2.clear__V();
  while (this.getc__Z()) {
    /*<skip>*/
  };
  return this.sb$2.toString__T()
});
ScalaJS.c.scala_io_Source$LineIterator.prototype.scala$io$Source$LineIterator$$$outer__Lscala_io_Source = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_io_Source$LineIterator.prototype.next__O = (function() {
  return this.next__T()
});
ScalaJS.c.scala_io_Source$LineIterator.prototype.init___Lscala_io_Source = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  this.sb$2 = new ScalaJS.c.scala_collection_mutable_StringBuilder().init___();
  return this
});
ScalaJS.c.scala_io_Source$LineIterator.prototype.scala$io$Source$LineIterator$$$outer__ = (function() {
  return this.scala$io$Source$LineIterator$$$outer__Lscala_io_Source()
});
ScalaJS.c.scala_io_Source$LineIterator.prototype.getc__ = (function() {
  return ScalaJS.bZ(this.getc__Z())
});
ScalaJS.c.scala_io_Source$LineIterator.prototype.isNewline__C__ = (function(ch) {
  return ScalaJS.bZ(this.isNewline__C__Z(ch))
});
ScalaJS.c.scala_io_Source$LineIterator.prototype.iter__ = (function() {
  return this.iter__Lscala_collection_BufferedIterator()
});
/** @constructor */
ScalaJS.inheritable.scala_io_Source$LineIterator = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_io_Source$LineIterator.prototype = ScalaJS.c.scala_io_Source$LineIterator.prototype;
ScalaJS.is.scala_io_Source$LineIterator = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_io_Source$LineIterator)))
});
ScalaJS.as.scala_io_Source$LineIterator = (function(obj) {
  if ((ScalaJS.is.scala_io_Source$LineIterator(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.io.Source$LineIterator")
  }
});
ScalaJS.isArrayOf.scala_io_Source$LineIterator = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_io_Source$LineIterator)))
});
ScalaJS.asArrayOf.scala_io_Source$LineIterator = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_io_Source$LineIterator(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.io.Source$LineIterator;", depth)
  }
});
ScalaJS.data.scala_io_Source$LineIterator = new ScalaJS.ClassTypeData({
  scala_io_Source$LineIterator: 0
}, false, "scala.io.Source$LineIterator", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_io_Source$LineIterator: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_io_Source$LineIterator.prototype.$classData = ScalaJS.data.scala_io_Source$LineIterator;
//@ sourceMappingURL=Source$LineIterator.js.map
