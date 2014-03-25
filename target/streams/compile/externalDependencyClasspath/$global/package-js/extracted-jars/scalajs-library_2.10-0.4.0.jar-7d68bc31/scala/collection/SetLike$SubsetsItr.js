/** @constructor */
ScalaJS.c.scala_collection_SetLike$SubsetsItr = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.scala$collection$SetLike$SubsetsItr$$elms$f = null;
  this.len$2 = 0;
  this.scala$collection$SetLike$SubsetsItr$$idxs$2 = null;
  this.$$undhasNext$2 = false;
  this.$$outer$f = null
});
ScalaJS.c.scala_collection_SetLike$SubsetsItr.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_SetLike$SubsetsItr.prototype.constructor = ScalaJS.c.scala_collection_SetLike$SubsetsItr;
ScalaJS.c.scala_collection_SetLike$SubsetsItr.prototype.scala$collection$SetLike$SubsetsItr$$idxs__AI = (function() {
  return this.scala$collection$SetLike$SubsetsItr$$idxs$2
});
ScalaJS.c.scala_collection_SetLike$SubsetsItr.prototype.$$undhasNext__p2__Z = (function() {
  return this.$$undhasNext$2
});
ScalaJS.c.scala_collection_SetLike$SubsetsItr.prototype.$$undhasNext$und$eq__p2__Z__V = (function(x$1) {
  this.$$undhasNext$2 = x$1
});
ScalaJS.c.scala_collection_SetLike$SubsetsItr.prototype.hasNext__Z = (function() {
  return this.$$undhasNext__p2__Z()
});
ScalaJS.c.scala_collection_SetLike$SubsetsItr.prototype.next__Lscala_collection_Set = (function() {
  if ((!this.hasNext__Z())) {
    ScalaJS.modules.scala_collection_Iterator().empty__Lscala_collection_Iterator().next__O()
  } else {
    ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
  };
  var buf = this.scala$collection$SetLike$SubsetsItr$$$outer__Lscala_collection_SetLike().newBuilder__Lscala_collection_mutable_Builder();
  ScalaJS.modules.scala_Predef().intArrayOps__AI__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.scala_Int(ScalaJS.modules.scala_Predef().intArrayOps__AI__Lscala_collection_mutable_ArrayOps(this.scala$collection$SetLike$SubsetsItr$$idxs__AI()).slice__I__I__O(0, this.len$2), 1)).foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, buf$1) {
    return (function(idx) {
      idx = ScalaJS.uI(idx);
      return buf$1.$$plus$eq__O__Lscala_collection_mutable_Builder(arg$outer.scala$collection$SetLike$SubsetsItr$$elms$f.apply__I__O(idx))
    })
  })(this, buf)));
  var result = ScalaJS.as.scala_collection_Set(buf.result__O());
  var i = (this.len$2 - 1);
  while (((i >= 0) && (this.scala$collection$SetLike$SubsetsItr$$idxs__AI().underlying[i] === (this.scala$collection$SetLike$SubsetsItr$$idxs__AI().underlying[(i + 1)] - 1)))) {
    i = (i - 1)
  };
  if ((i < 0)) {
    this.$$undhasNext$und$eq__p2__Z__V(false)
  } else {
    var ev$1 = i;
    this.scala$collection$SetLike$SubsetsItr$$idxs__AI().underlying[ev$1] = (this.scala$collection$SetLike$SubsetsItr$$idxs__AI().underlying[ev$1] + 1);
    ScalaJS.modules.scala_runtime_RichInt().until$extension0__I__I__Lscala_collection_immutable_Range(ScalaJS.modules.scala_Predef().intWrapper__I__I((i + 1)), this.len$2).foreach$mVc$sp__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
      return (function(j) {
        j = ScalaJS.uI(j);
        arg$outer.scala$collection$SetLike$SubsetsItr$$idxs__AI().underlying[j] = (arg$outer.scala$collection$SetLike$SubsetsItr$$idxs__AI().underlying[(j - 1)] + 1);
        return ScalaJS.bV(undefined)
      })
    })(this)))
  };
  return result
});
ScalaJS.c.scala_collection_SetLike$SubsetsItr.prototype.scala$collection$SetLike$SubsetsItr$$$outer__Lscala_collection_SetLike = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_SetLike$SubsetsItr.prototype.next__O = (function() {
  return this.next__Lscala_collection_Set()
});
ScalaJS.c.scala_collection_SetLike$SubsetsItr.prototype.init___Lscala_collection_SetLike__Lscala_collection_IndexedSeq__I = (function($$outer, elms, len) {
  this.scala$collection$SetLike$SubsetsItr$$elms$f = elms;
  this.len$2 = len;
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  this.scala$collection$SetLike$SubsetsItr$$idxs$2 = ScalaJS.modules.scala_Array().range__I__I__AI(0, (len + 1));
  this.$$undhasNext$2 = true;
  this.scala$collection$SetLike$SubsetsItr$$idxs__AI().underlying[len] = elms.size__I();
  return this
});
ScalaJS.c.scala_collection_SetLike$SubsetsItr.prototype.scala$collection$SetLike$SubsetsItr$$$outer__ = (function() {
  return this.scala$collection$SetLike$SubsetsItr$$$outer__Lscala_collection_SetLike()
});
ScalaJS.c.scala_collection_SetLike$SubsetsItr.prototype.scala$collection$SetLike$SubsetsItr$$idxs__ = (function() {
  return this.scala$collection$SetLike$SubsetsItr$$idxs__AI()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_SetLike$SubsetsItr = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_SetLike$SubsetsItr.prototype = ScalaJS.c.scala_collection_SetLike$SubsetsItr.prototype;
ScalaJS.is.scala_collection_SetLike$SubsetsItr = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_SetLike$SubsetsItr)))
});
ScalaJS.as.scala_collection_SetLike$SubsetsItr = (function(obj) {
  if ((ScalaJS.is.scala_collection_SetLike$SubsetsItr(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.SetLike$SubsetsItr")
  }
});
ScalaJS.isArrayOf.scala_collection_SetLike$SubsetsItr = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_SetLike$SubsetsItr)))
});
ScalaJS.asArrayOf.scala_collection_SetLike$SubsetsItr = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_SetLike$SubsetsItr(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.SetLike$SubsetsItr;", depth)
  }
});
ScalaJS.data.scala_collection_SetLike$SubsetsItr = new ScalaJS.ClassTypeData({
  scala_collection_SetLike$SubsetsItr: 0
}, false, "scala.collection.SetLike$SubsetsItr", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_SetLike$SubsetsItr: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_SetLike$SubsetsItr.prototype.$classData = ScalaJS.data.scala_collection_SetLike$SubsetsItr;
//@ sourceMappingURL=SetLike$SubsetsItr.js.map
