/** @constructor */
ScalaJS.c.scala_collection_SeqLike$PermutationsItr = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.x$1$2 = null;
  this.elms$2 = null;
  this.idxs$2 = null;
  this.$$undhasNext$2 = false;
  this.$$outer$f = null
});
ScalaJS.c.scala_collection_SeqLike$PermutationsItr.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_SeqLike$PermutationsItr.prototype.constructor = ScalaJS.c.scala_collection_SeqLike$PermutationsItr;
ScalaJS.c.scala_collection_SeqLike$PermutationsItr.prototype.$$undhasNext__p2__Z = (function() {
  return this.$$undhasNext$2
});
ScalaJS.c.scala_collection_SeqLike$PermutationsItr.prototype.$$undhasNext$und$eq__p2__Z__V = (function(x$1) {
  this.$$undhasNext$2 = x$1
});
ScalaJS.c.scala_collection_SeqLike$PermutationsItr.prototype.hasNext__Z = (function() {
  return this.$$undhasNext__p2__Z()
});
ScalaJS.c.scala_collection_SeqLike$PermutationsItr.prototype.next__O = (function() {
  if ((!this.hasNext__Z())) {
    ScalaJS.modules.scala_collection_Iterator().empty__Lscala_collection_Iterator().next__O()
  } else {
    ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
  };
  var forcedElms = new ScalaJS.c.scala_collection_mutable_ArrayBuffer().init___I(this.elms$2.size__I()).$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_mutable_ArrayBuffer(this.elms$2);
  var result = ScalaJS.as.scala_collection_mutable_Builder(this.scala$collection$SeqLike$PermutationsItr$$$outer__Lscala_collection_SeqLike().newBuilder__Lscala_collection_mutable_Builder().$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(forcedElms)).result__O();
  var i = (this.idxs$2.underlying.length - 2);
  while (((i >= 0) && (this.idxs$2.underlying[i] >= this.idxs$2.underlying[(i + 1)]))) {
    i = (i - 1)
  };
  if ((i < 0)) {
    this.$$undhasNext$und$eq__p2__Z__V(false)
  } else {
    var j = (this.idxs$2.underlying.length - 1);
    while ((this.idxs$2.underlying[j] <= this.idxs$2.underlying[i])) {
      j = (j - 1)
    };
    this.swap__p2__I__I__V(i, j);
    var len = (((this.idxs$2.underlying.length - i) / 2) | 0);
    var k = 1;
    while ((k <= len)) {
      this.swap__p2__I__I__V((i + k), (this.idxs$2.underlying.length - k));
      k = (k + 1)
    }
  };
  return result
});
ScalaJS.c.scala_collection_SeqLike$PermutationsItr.prototype.swap__p2__I__I__V = (function(i, j) {
  var tmpI = this.idxs$2.underlying[i];
  this.idxs$2.underlying[i] = this.idxs$2.underlying[j];
  this.idxs$2.underlying[j] = tmpI;
  var tmpE = this.elms$2.apply__I__O(i);
  this.elms$2.update__I__O__V(i, this.elms$2.apply__I__O(j));
  this.elms$2.update__I__O__V(j, tmpE)
});
ScalaJS.c.scala_collection_SeqLike$PermutationsItr.prototype.init__p2__Lscala_Tuple2 = (function() {
  var m = ScalaJS.as.scala_collection_mutable_HashMap(ScalaJS.modules.scala_collection_mutable_HashMap().apply__Lscala_collection_Seq__Lscala_collection_GenMap(ScalaJS.modules.scala_collection_immutable_Nil()));
  var x1 = ScalaJS.as.scala_collection_generic_GenericTraversableTemplate(ScalaJS.as.scala_collection_SeqLike(this.scala$collection$SeqLike$PermutationsItr$$$outer__Lscala_collection_SeqLike().thisCollection__Lscala_collection_Seq().map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_collection_SeqLike$PermutationsItr$$anonfun$2().init___Lscala_collection_SeqLike$PermutationsItr__Lscala_collection_mutable_HashMap(this, m), ScalaJS.modules.scala_collection_Seq().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).sortBy__Lscala_Function1__Lscala_math_Ordering__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$2) {
      return ScalaJS.bI(x$2.$$und2$mcI$sp__I())
    })
  })()), ScalaJS.modules.scala_math_Ordering$Int())).unzip__Lscala_Function1__Lscala_Tuple2(ScalaJS.modules.scala_Predef().conforms__Lscala_Predef$$less$colon$less());
  matchEnd3: {
    if ((x1 !== null)) {
      var es = ScalaJS.as.scala_collection_Seq(x1.$$und1__O());
      var is = ScalaJS.as.scala_collection_Seq(x1.$$und2__O());
      var x$3 = new ScalaJS.c.scala_Tuple2().init___O__O(es, is);
      break matchEnd3
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  };
  var es$2 = ScalaJS.as.scala_collection_Seq(x$3.$$und1__O());
  var is$2 = ScalaJS.as.scala_collection_Seq(x$3.$$und2__O());
  return new ScalaJS.c.scala_Tuple2().init___O__O(es$2.toBuffer__Lscala_collection_mutable_Buffer(), is$2.toArray__Lscala_reflect_ClassTag__O(ScalaJS.modules.scala_reflect_ClassTag().Int__Lscala_reflect_ClassTag()))
});
ScalaJS.c.scala_collection_SeqLike$PermutationsItr.prototype.scala$collection$SeqLike$PermutationsItr$$$outer__Lscala_collection_SeqLike = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_SeqLike$PermutationsItr.prototype.init___Lscala_collection_SeqLike = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  var x1 = this.init__p2__Lscala_Tuple2();
  matchEnd3: {
    if ((x1 !== null)) {
      var elms = ScalaJS.as.scala_collection_mutable_Buffer(x1.$$und1__O());
      var idxs = ScalaJS.asArrayOf.scala_Int(x1.$$und2__O(), 1);
      var jsx$1 = new ScalaJS.c.scala_Tuple2().init___O__O(elms, idxs);
      break matchEnd3
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  };
  this.x$1$2 = jsx$1;
  this.elms$2 = ScalaJS.as.scala_collection_mutable_Buffer(this.x$1$2.$$und1__O());
  this.idxs$2 = ScalaJS.asArrayOf.scala_Int(this.x$1$2.$$und2__O(), 1);
  this.$$undhasNext$2 = true;
  return this
});
ScalaJS.c.scala_collection_SeqLike$PermutationsItr.prototype.scala$collection$SeqLike$PermutationsItr$$$outer__ = (function() {
  return this.scala$collection$SeqLike$PermutationsItr$$$outer__Lscala_collection_SeqLike()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_SeqLike$PermutationsItr = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_SeqLike$PermutationsItr.prototype = ScalaJS.c.scala_collection_SeqLike$PermutationsItr.prototype;
ScalaJS.is.scala_collection_SeqLike$PermutationsItr = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_SeqLike$PermutationsItr)))
});
ScalaJS.as.scala_collection_SeqLike$PermutationsItr = (function(obj) {
  if ((ScalaJS.is.scala_collection_SeqLike$PermutationsItr(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.SeqLike$PermutationsItr")
  }
});
ScalaJS.isArrayOf.scala_collection_SeqLike$PermutationsItr = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_SeqLike$PermutationsItr)))
});
ScalaJS.asArrayOf.scala_collection_SeqLike$PermutationsItr = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_SeqLike$PermutationsItr(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.SeqLike$PermutationsItr;", depth)
  }
});
ScalaJS.data.scala_collection_SeqLike$PermutationsItr = new ScalaJS.ClassTypeData({
  scala_collection_SeqLike$PermutationsItr: 0
}, false, "scala.collection.SeqLike$PermutationsItr", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_SeqLike$PermutationsItr: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_SeqLike$PermutationsItr.prototype.$classData = ScalaJS.data.scala_collection_SeqLike$PermutationsItr;
//@ sourceMappingURL=SeqLike$PermutationsItr.js.map
