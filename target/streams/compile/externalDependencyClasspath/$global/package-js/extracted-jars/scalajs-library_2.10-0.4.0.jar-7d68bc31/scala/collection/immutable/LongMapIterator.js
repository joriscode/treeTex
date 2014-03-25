/** @constructor */
ScalaJS.c.scala_collection_immutable_LongMapIterator = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.index$2 = 0;
  this.buffer$2 = null
});
ScalaJS.c.scala_collection_immutable_LongMapIterator.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_immutable_LongMapIterator.prototype.constructor = ScalaJS.c.scala_collection_immutable_LongMapIterator;
ScalaJS.c.scala_collection_immutable_LongMapIterator.prototype.index__I = (function() {
  return this.index$2
});
ScalaJS.c.scala_collection_immutable_LongMapIterator.prototype.index$und$eq__I__V = (function(x$1) {
  this.index$2 = x$1
});
ScalaJS.c.scala_collection_immutable_LongMapIterator.prototype.buffer__AO = (function() {
  return this.buffer$2
});
ScalaJS.c.scala_collection_immutable_LongMapIterator.prototype.buffer$und$eq__AO__V = (function(x$1) {
  this.buffer$2 = x$1
});
ScalaJS.c.scala_collection_immutable_LongMapIterator.prototype.pop__Lscala_collection_immutable_LongMap = (function() {
  this.index$und$eq__I__V((this.index__I() - 1));
  return ScalaJS.as.scala_collection_immutable_LongMap(this.buffer__AO().underlying[this.index__I()])
});
ScalaJS.c.scala_collection_immutable_LongMapIterator.prototype.push__Lscala_collection_immutable_LongMap__V = (function(x) {
  this.buffer__AO().underlying[this.index__I()] = x;
  this.index$und$eq__I__V((this.index__I() + 1))
});
ScalaJS.c.scala_collection_immutable_LongMapIterator.prototype.hasNext__Z = (function() {
  return (this.index__I() !== 0)
});
ScalaJS.c.scala_collection_immutable_LongMapIterator.prototype.next__O = (function() {
  var _$this = this;
  tailCallLoop: while (true) {
    var rc16 = false;
    var x4 = null;
    var x1 = _$this.pop__Lscala_collection_immutable_LongMap();
    if (ScalaJS.is.scala_collection_immutable_LongMap$Bin(x1)) {
      rc16 = true;
      x4 = ScalaJS.as.scala_collection_immutable_LongMap$Bin(x1);
      var t = x4.left__Lscala_collection_immutable_LongMap();
      var right = x4.right__Lscala_collection_immutable_LongMap();
      if (ScalaJS.is.scala_collection_immutable_LongMap$Tip(t)) {
        var x7 = ScalaJS.as.scala_collection_immutable_LongMap$Tip(t);
        _$this.push__Lscala_collection_immutable_LongMap__V(right);
        return _$this.valueOf__Lscala_collection_immutable_LongMap$Tip__O(x7)
      }
    };
    if (rc16) {
      var left = x4.left__Lscala_collection_immutable_LongMap();
      var right$2 = x4.right__Lscala_collection_immutable_LongMap();
      _$this.push__Lscala_collection_immutable_LongMap__V(right$2);
      _$this.push__Lscala_collection_immutable_LongMap__V(left);
      continue tailCallLoop
    };
    if (ScalaJS.is.scala_collection_immutable_LongMap$Tip(x1)) {
      var x13 = ScalaJS.as.scala_collection_immutable_LongMap$Tip(x1);
      return _$this.valueOf__Lscala_collection_immutable_LongMap$Tip__O(x13)
    };
    if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_immutable_LongMap$Nil(), x1)) {
      return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("Empty maps not allowed as subtrees")
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  }
});
ScalaJS.c.scala_collection_immutable_LongMapIterator.prototype.init___Lscala_collection_immutable_LongMap = (function(it) {
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  this.index$2 = 0;
  this.buffer$2 = ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [65]);
  this.push__Lscala_collection_immutable_LongMap__V(it);
  return this
});
ScalaJS.c.scala_collection_immutable_LongMapIterator.prototype.push__Lscala_collection_immutable_LongMap__ = (function(x) {
  return ScalaJS.bV(this.push__Lscala_collection_immutable_LongMap__V(x))
});
ScalaJS.c.scala_collection_immutable_LongMapIterator.prototype.pop__ = (function() {
  return this.pop__Lscala_collection_immutable_LongMap()
});
ScalaJS.c.scala_collection_immutable_LongMapIterator.prototype.buffer$und$eq__AO__ = (function(x$1) {
  return ScalaJS.bV(this.buffer$und$eq__AO__V(x$1))
});
ScalaJS.c.scala_collection_immutable_LongMapIterator.prototype.buffer__ = (function() {
  return this.buffer__AO()
});
ScalaJS.c.scala_collection_immutable_LongMapIterator.prototype.index$und$eq__I__ = (function(x$1$2) {
  return ScalaJS.bV(this.index$und$eq__I__V(x$1$2))
});
ScalaJS.c.scala_collection_immutable_LongMapIterator.prototype.index__ = (function() {
  return ScalaJS.bI(this.index__I())
});
ScalaJS.c.scala_collection_immutable_LongMapIterator.prototype.valueOf__Lscala_collection_immutable_LongMap$Tip__ = (function(tip) {
  return this.valueOf__Lscala_collection_immutable_LongMap$Tip__O(tip)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_LongMapIterator = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_LongMapIterator.prototype = ScalaJS.c.scala_collection_immutable_LongMapIterator.prototype;
ScalaJS.is.scala_collection_immutable_LongMapIterator = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_LongMapIterator)))
});
ScalaJS.as.scala_collection_immutable_LongMapIterator = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_LongMapIterator(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.LongMapIterator")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_LongMapIterator = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_LongMapIterator)))
});
ScalaJS.asArrayOf.scala_collection_immutable_LongMapIterator = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_LongMapIterator(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.LongMapIterator;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_LongMapIterator = new ScalaJS.ClassTypeData({
  scala_collection_immutable_LongMapIterator: 0
}, false, "scala.collection.immutable.LongMapIterator", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_immutable_LongMapIterator: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_LongMapIterator.prototype.$classData = ScalaJS.data.scala_collection_immutable_LongMapIterator;
//@ sourceMappingURL=LongMapIterator.js.map
